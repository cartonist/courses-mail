<template>
  <header @mouseleave="isShow = false">
    <div class="header-content">
      <h1 class="content-logo">
        <img src="../../assets/img/logo.jpg" alt="">
      </h1>
      <div class="content-nav">
        <ul>
          <li>
            <router-link to="/home">首 页</router-link>
          </li>
          <li>
            <router-link to="/course">课 程</router-link>
          </li>
          <li>会 员</li>
          <li>简 历</li>
        </ul>
      </div>
      <div class="search-buy-login">
        <div class="content-search">
          <input type="text" name="" placeholder="请输入搜素课程">
          <el-icon :size="22" color="#808080">
            <Search />
          </el-icon>
        </div>
        <div class="content-shopping">
          <el-icon :size="24" color="#808080" @click="Cart">
            <ShoppingCart />
          </el-icon>
        </div>
        <div class="content-login" v-if="!isLogin">
          <router-link to="/login">登录/注册</router-link>
        </div>
        <div class="content-login-success" v-else>
          <div style="cursor: pointer">我的课程</div>
          <div @mouseenter="isShow=true">
            <img class="avator" :src="getImgSrc(userInfo.avatar)" alt="" v-if="userInfo.avatar" />
            <img class="avator" src='../../assets/img/teacher/user2.jpg' v-else />
          </div>
        </div>
        <div class="user-info" v-if="isShow&&userInfo">
          <div class="user-info-top">
            <div class="u-i-t-top">
              <img class="avator" :src="getImgSrc(userInfo.avatar)" alt="" v-if="userInfo.avatar" />
              <img class="avator" src='../../assets/img/teacher/user2.jpg' v-else />
              <div class="avator-info">
                <p>{{userInfo.nickName?userInfo.nickName:'用户昵称'}}</p>
              </div>
              <div class="vip" v-if="vipInfo">
                <div class="vipImg">
                  <img src="../../assets/img/info-member.png" :class="endTimeVip < 0 ? 'gray':''">
                </div>
                <div class="vipName">{{vipInfo.vipName}}</div>
                <div class="endTime" v-if="vipInfo.isExpired === 0 ">{{endTimeVip}}天到期</div>
                <div class="endTime" v-else>已过期{{Math.abs(endTimeVip)}}天</div>
              </div>
            </div>
            <div class="u-i-i-bottom">
              <div>
                <router-link to="/">
                  <div class="info-item">
                    <el-icon :size="18">
                      <Management />
                    </el-icon>
                    <p>我的课程</p>
                  </div>
                </router-link>
              </div>
              <div>
                <router-link to="/">
                  <div class="info-item">
                    <el-icon :size="18">
                      <List />
                    </el-icon>
                    <p>订单中心</p>
                  </div>
                </router-link>
              </div>
              <div>
                <router-link to="/">
                  <div class="info-item">
                    <el-icon :size="18">
                      <Promotion />
                    </el-icon>
                    <p>我的消息</p>
                  </div>
                </router-link>
              </div>
              <div>
                <router-link to="/">
                  <div class="info-item">
                    <el-icon :size="18">
                      <Tools />
                    </el-icon>
                    <p>个人设置</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="user-info-bottom">
            <div class="logout" @click="outLogin">退出登录</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onBeforeMount, ref } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../store/user.js'
import { createToken } from '../../utils/api/createToken.js'
import { getUserInfo } from '../../utils/api/user.js'
const router = useRouter()
const userStore = useUserStore()
// 用户是否是登录的状态
const isLogin = ref(false)
// 用户信息
const userInfo = ref({})
// 用户的VIP信息
const vipInfo = ref({})
// 用户下拉菜单是否显示
const isShow = ref(false)
// vip的剩余天数
let endTimeVip = ref()
// vue3+vite动态引入静态资源的方式    import.mata.url表示当前组件的路径
const getImgSrc = user => {
  return new URL(`../../assets/img/user/${user}`, import.meta.url).href
}
onBeforeMount(async () => {
  const token = userStore.token
  if (!token) return
  const res = await createToken()
  console.log(res)
  const data = await getUserInfo({ tempToken: res.tempToken })
  if (data.status == 200) {
    // 登录成功
    isLogin.value = true
    userInfo.value = data.data

    vipInfo.value = data.data.vipInfo
    useUserStore().userinfo = data.data
    // 计算会员到期时间（时间戳）
    let now = new Date().getTime()
    let endTime = vipInfo.value.endTime - now
    endTimeVip.value = Math.floor(endTime / 1000 / 60 / 60 / 24)
  } else {
    // 登录失败
    ElMessage({
      showClose: true,
      message: '登录失败',
      type: 'error'
    })
  }
})
// 跳转至购物车
const Cart = () => {
  router.push({ name: 'cart' })
}
const outLogin = () => {
  ElMessageBox.confirm('是否确认退出登录', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: '退出成功'
      })
      userStore.clearToken()
      router.go(0)
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消退出'
      })
    })
}
</script>

<style lang="less" scoped>
header {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.16);
  background-color: #fff;
}
.header-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1300px;
}
.content-logo {
  width: 160px;
  height: 55px;
  cursor: pointer;
  img {
    height: 100%;
  }
}
.content-nav {
  width: 400px;
  height: 75px;
  a {
    text-decoration: none;
    color: #808080;
  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    li {
      font-size: 18px;
      color: #808080;
      cursor: pointer;
    }
  }
}
.search-buy-login {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 535px;
  .content-search {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    width: 258px;
    height: 30px;
    background: #f0f2f4;
    border-radius: 30px;
    input {
      padding: 0 10px;
      width: 430px;
      height: 30px;
      border: 0;
      border-radius: 8px;
      background: #f0f2f4;
      color: #808080;
      font-size: 16px;
      outline: none;
    }
  }
  .content-login {
    font-size: 18px;
    color: #808080;
    text-align: center;
    cursor: pointer;
    a {
      text-decoration: none;
      color: #808080;
    }
  }
  .content-login-success {
    height: 53px;
    color: #808080;
    text-align: center;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #707070;
    .avator {
      height: 53px;
      width: 53px;
      cursor: pointer;
      border-radius: 50%;
    }
  }
}
.user-info {
  width: 200px;
  height: 194px;
  background-color: #fff;
  border: 1px solid rgba(248, 250, 252, 1);
  box-shadow: 0px 5px 15px 3px #888888;
  position: absolute;
  top: 75px;
  right: 45px;
  z-index: 999;
  display: block;
  border-radius: 10px;
}
.user-info-top {
  display: flex;
  width: 100%;
  height: 160px;
  border-bottom: 1px solid rgba(248, 250, 252, 1);
  flex-direction: column;
}
.u-i-t-top {
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
}
.u-i-t-top img {
  width: 40px;
  height: 40px;
  margin: 0 10px;
  border-radius: 50%;
  cursor: pointer;
}
.avator-info {
  width: 120px;
  height: 60px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
}
/*有会员了之后高度微调*/
.avator-info p {
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.u-i-i-bottom {
  display: flex;
  height: 100px;
  width: 200px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.u-i-i-bottom a {
  text-decoration: none;
}
.info-item {
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  border-radius: 3px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1) !important;
}
.info-item img {
  width: 14px;
  height: 16px;
}
.user-info-bottom {
  position: relative;
  width: 100%;
  height: 30px;
  .logout {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 16px;
    color: #808080;
  }
}
.vip {
  display: flex;
  flex-direction: row;
  /*flex-wrap: wrap;*/
  width: 100%;
  height: 30px;
  margin-left: -105px;
  margin-top: 18px;
  font-size: 12px;
  line-height: 30px;
}
.vipImg {
  width: 15px;
  height: 15px;
  margin-right: 12px;
}
.vipImg img {
  width: 100% !important;
  height: 100% !important;
}
.vipName {
  color: #93999f;
}
.endTime {
  padding-left: 2px;
  color: #ff0000;
  position: absolute;
  top: 45px;
  left: 73px;
  font-size: 12px;
}
.gray {
  filter: grayscale(100%);
}
</style>