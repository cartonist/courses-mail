<template>
  <div class="container" :class=" !mode ? 'sign-up-mode' : ''">
    <div class="forms-container">
      <div class="signin-signup">
        <el-form action="#" class="sign-in-form" :rules="accountRules" ref="formLoginByAccount" :model="loginFormByAccount" v-if="loginWays == '0'">
          <h2 class="title">账号登录</h2>
          <el-form-item class="input-field" prop="username">
            <i class="fas fa-user"></i>
            <el-input type="text" placeholder="用户名" v-model="loginFormByAccount.username" />
          </el-form-item>
          <el-form-item class="input-field" prop="password">
            <i class="fas fa-lock"></i>
            <el-input type="password" placeholder="密码" v-model="loginFormByAccount.password" />
          </el-form-item>
          <el-button class="btn solid" @click="login">立即登录</el-button>
          <p class="social-text">通过其他方式</p>
          <div class="social-media">
            <a href="#" class="social-icon" @click.prevent=" loginWays = '0'">
              <el-icon>
                <UserFilled />
              </el-icon>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-weixin"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-qq"></i>
            </a>
            <a href="#" class="social-icon" @click.prevent=" loginWays = '1'">
              <el-icon>
                <Iphone />
              </el-icon>
            </a>
          </div>
        </el-form>
        <el-form action="#" class="sign-in-form" :rules="phoneRules" ref="formLoginByPhone" :model="loginFormByPhone" v-if="loginWays == '1'">
          <h2 class="title">短信登录</h2>
          <el-form-item class="input-field" prop="phone">
            <i class="fa fa-phone"></i>
            <el-input type="text" placeholder="请输入手机号" v-model="loginFormByPhone.phone" />
          </el-form-item>
          <el-form-item class="input-field vertify-container" prop="captcha">
            <el-input type="text" placeholder="请输入验证码" v-model="loginFormByPhone.captcha" class="vertify-code" />
            <el-button type="primary" class="code-send" @click="sendCode" :disabled="btnDisable">{{ captcha }}</el-button>
          </el-form-item>
          <el-button class="btn solid" @click="loginByPhone">立即登录</el-button>
          <p class="social-text">通过其他方式</p>
          <div class="social-media">
            <a href="#" class="social-icon" @click.prevent=" loginWays = '0'">
              <el-icon>
                <UserFilled />
              </el-icon>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-weixin"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-qq"></i>
            </a>
            <a href="#" class="social-icon" @click.prevent=" loginWays = '1'">
              <el-icon>
                <Iphone />
              </el-icon>
            </a>
          </div>
        </el-form>
        <el-form action="#" class="sign-up-form">
          <h2 class="title">注册</h2>
          <el-form-item class="input-field">
            <i class="fas fa-user"></i>
            <el-input type="text" placeholder="用户名" />
          </el-form-item>
          <el-form-item class="input-field">
            <i class="fas fa-envelope"></i>
            <el-input type="email" placeholder="邮箱" />
          </el-form-item>
          <el-form-item class="input-field">
            <i class="fas fa-lock"></i>
            <el-input type="password" placeholder="密码" />
          </el-form-item>
          <el-button class="btn">立即注册</el-button>
          <p class="social-text">通过其他方式</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-qq"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-weixin"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-weibo"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-alipay"></i>
            </a>
          </div>
        </el-form>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>加入我们</h3>
          <p>
            加入我们，成为本站的一份子。
          </p>
          <button class="btn transparent" id="sign-up-btn" @click="mode = !mode">
            去注册
          </button>
        </div>
        <img src="../assets/img/login/log.svg" class="image" alt="" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>已有帐号？</h3>
          <p>
            立即登录已有帐号，享受独家权益。
          </p>
          <button class="btn transparent" id="sign-in-btn" @click="mode = !mode">
            去登录
          </button>
        </div>
        <img src="../assets/img/login/register.svg" class="image" alt="" />
      </div>
    </div>
  </div>
  <Vcode :show="isShow" :imgs="regImg" @success="regSuccess" @fail="regFails" @close="closeRe"></Vcode>
</template>

<script setup>
import { getCurrentInstance, reactive, ref } from '@vue/runtime-core'
import { Login, sendCaptcha, loginByMobile } from '../utils/api/login.js'
import Vcode from 'vue3-puzzle-vcode'
import '../assets/js/fontawesome.js'
import regImg from '../utils/regImg.js'
import { useUserStore } from '../store/user.js'
// 是否展示验证滑块
const isShow = ref(false)
// 图片滑动验证的错误次数
let photoHua = 0
const userStore = useUserStore()
// 引入加密的方法
import { Encrypt } from '../utils/aes.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const { proxy } = getCurrentInstance()
// 模式，true表示登录，false表示注册
const mode = ref(true)
// 登录方式，0表示用户登录，1表示手机登录
let loginWays = ref('0')
const loginFormByAccount = reactive({
  username: '',
  password: ''
})
const loginFormByPhone = reactive({
  phone: '',
  captcha: ''
})
let btnDisable = ref(false)
//验证码按钮
const captcha = ref('发送验证码')
let phoneTimer = null
const dropDown = () => {
  let timer = 10
  captcha.value = '重新发送10秒'
  btnDisable.value = 'disabled'
  clearInterval(phoneTimer)
  phoneTimer = setInterval(() => {
    timer--
    if (timer <= 0) {
      clearInterval(phoneTimer)
      captcha.value = '重新发送'
      btnDisable.value = false
    } else {
      captcha.value = `重新发送${timer}秒`
    }
  }, 1000)
}
const phoneRules = {
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[3456789]\d{9}$/, message: '目前只支持中国大陆的手机号码', trigger: 'blur' }
  ],
  captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
}
const accountRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 11, message: '请输入3-11位用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 11, message: '请输入3-11为密码', trigger: 'blur' }
  ]
}
const sendCode = () => {
  let phone = loginFormByPhone.phone
  let regTel = /^1[3456789]\d{9}$/
  // 手机号验证
  if (!regTel.test(phone)) {
    ElMessage({
      showClose: true,
      message: '请输入正确的手机号',
      type: 'warning'
    })
  } else {
    isShow.value = true
  }
}
const login = () => {
  proxy.$refs.formLoginByAccount.validate(async (valid, fields) => {
    // 提交之前对表单进行整体的验证
    if (valid) {
      const res = await Login({
        username: Encrypt(loginFormByAccount.username),
        password: Encrypt(loginFormByAccount.password)
      })
      if (res.status != 200) {
        ElMessage({
          showClose: true,
          message: res.msg,
          type: 'error'
        })
      } else {
        userStore.setToken(res.token)
        ElMessage({
          showClose: true,
          message: '登陆成功',
          type: 'success'
        })
        router.push({ name: 'home' })
      }
    } else {
      proxy.$refs.formLoginByAccount.resetFields()
      ElMessage({
        showClose: true,
        message: '用户名或密码错误',
        type: 'warning'
      })
    }
  })
}
const loginByPhone = () => {
  proxy.$refs.formLoginByPhone.validate(async (valid, fields) => {
    // 提交之前对表单进行整体的验证
    if (valid) {
      // 手机号和验证码的登录验证
      const res = await loginByMobile({ phone: loginFormByPhone.phone })
      // 验证通过后，设置token（验证码验证部分尚未实现，直接返回token）
      if (res.status != 200) {
        ElMessage({
          showClose: true,
          message: res.msg,
          type: 'error'
        })
      } else {
        userStore.setToken(res.token)
        ElMessage({
          showClose: true,
          message: '登陆成功',
          type: 'success'
        })
        router.push({ name: 'home' })
      }
    } else {
      proxy.$refs.formLoginByPhone.resetFields()
      ElMessage({
        showClose: true,
        message: '手机号或验证码错误',
        type: 'error'
      })
    }
  })
}
// 滑块验证成功的回调
const regSuccess = async () => {
  // 关闭滑块
  isShow.value = false
  ElMessage({
    showClose: true,
    message: '验证通过，验证码已发送',
    type: 'success'
  })
  const params = loginFormByPhone.phone
  // 发送验证码到手机
  const res = await sendCaptcha({ mobile: loginFormByPhone.phone })
  dropDown()
}
// 滑块失败的验证
const regFails = () => {
  photoHua += 1
  if (photoHua > 5) {
    ElMessage({
      showClose: true,
      message: '其实ψ(*｀ー´)ψ......你要是一直拼不成功，我会让你一直拼下去的哟...',
      type: 'warning'
    })
    photoHua = 0
  }
}
// 点击图片验证的背景部分事件
const closeRe = () => {
  ElMessage({
    showClose: true,
    message: '请完成滑动验证，验证成功之后验证框会自动消失...(๑╹◡╹)ﾉ',
    type: 'warning'
  })
}
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input {
  font-family: 'Poppins', sans-serif;
}

.container {
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

.el-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.el-form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

.el-form.sign-in-form {
  z-index: 2;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field {
  max-width: 350px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: flex;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}
:deep(.vertify-container .el-form-item__content) {
  display: flex;
  justify-content: space-between;
}
.vertify-code {
  width: 60% !important;
}
.code-send {
  padding: 10px;
  border-radius: 15px;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
}

:deep(.el-form-item__content) {
  width: 200px;
  padding: 0 10px;
}
:deep(.el-input__wrapper) {
  box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
  cursor: default;
  background-color: #f0f0f0;
  padding: 5px 0;
}
.input-field .el-input {
  width: 90%;
  padding: 0 5px;
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
}

.social-icon:hover {
  color: #4481eb;
  border-color: #4481eb;
}

.btn {
  width: 150px;
  background-color: #5995fd;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  background-color: #4d84e2;
}
.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: '';
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
  transform: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode form.sign-up-form {
  opacity: 1;
  z-index: 2;
}

.container.sign-up-mode form.sign-in-form {
  opacity: 0;
  z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

@media (max-width: 870px) {
  .container {
    min-height: 800px;
    height: 100vh;
  }
  .signin-signup {
    width: 100%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }

  .signin-signup,
  .container.sign-up-mode .signin-signup {
    left: 50%;
  }

  .panels-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .panel {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }

  .right-panel {
    grid-row: 3 / 4;
  }

  .left-panel {
    grid-row: 1 / 2;
  }

  .image {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel .content {
    padding-right: 15%;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.8s;
  }

  .panel h3 {
    font-size: 1.2rem;
  }

  .panel p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }

  .btn.transparent {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }

  .container:before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
  }

  .container.sign-up-mode:before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateY(-300px);
  }

  .container.sign-up-mode .right-panel .image,
  .container.sign-up-mode .right-panel .content {
    transform: translateY(0px);
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateY(300px);
  }

  .container.sign-up-mode .signin-signup {
    top: 5%;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }
  .panel .content {
    padding: 0.5rem 1rem;
  }
  .container {
    padding: 1.5rem;
  }

  .container:before {
    bottom: 72%;
    left: 50%;
  }

  .container.sign-up-mode:before {
    bottom: 28%;
    left: 50%;
  }
}
</style>