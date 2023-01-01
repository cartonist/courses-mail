<template>
  <Header></Header>
  <div class="courseContainer">
    <div class="courseInfoTop">
      <div class="info-container">
        <ul class="route">
          <li class="route-item" style="cursor: pointer">
            <router-link to="/course" style="color: #fff">课程</router-link>
          </li>
          <el-icon v-if="courseInfo.isFree || courseInfo.isMember">
            <ArrowRightBold />
          </el-icon>
          <li class="route-item" style="cursor: pointer" v-if="courseInfo.isFree">免费课程</li>
          <li class="route-item" style="cursor: pointer" v-else-if="courseInfo.isMember">会员课程</li>
          <el-icon>
            <ArrowRightBold />
          </el-icon>
          <li class="route-item">{{ courseInfo.title }}</li>
        </ul>
        <div class="name">{{ courseInfo.title }}</div>
        <div class="info">
          <div class="Avat">
            <img :src="getImgSrc(courseInfo.teacherAvt)" alt="" />
          </div>
          <ul class="teacherName">
            <li class="name-item">
              <span>{{courseInfo.teacher}}</span>
              <img src="../assets/img/badge.png" alt="" />
            </li>
            <li class="name-item">金牌讲师</li>
          </ul>
          <ul class="access">
            <li class="access-item">难度</li>
            <li class="access-item">{{ courseTypeFn(courseInfo.level) }}</li>
            <li class="access-item">·</li>
            <li class="access-item">时长</li>
            <li class="access-item">{{ courseInfo.views }}小时</li>
            <li class="access-item">·</li>
            <li class="access-item">学习人数</li>
            <li class="access-item">{{ courseInfo.count }}人</li>
            <li class="access-item">·</li>
            <li class="access-item">综合评分</li>
            <li class="access-item">10.00</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="info-nav">
      <div class="nav-container">
        <div class="chapter-item">
          <div :class="active?'active1':''" @click="active = true">章节</div>
          <div class="line" :class="active?'active2':''"></div>
        </div>
        <div class="chapter-item">
          <div :class="!active?'active1':''" @click="active = false">下载资料</div>
          <div class="line" :class="!active?'active2':''"></div>
        </div>
      </div>
    </div>
    <div class="course" v-if="active">
      <div class="main">
        <div class="introduction">
          <div class="desc">
            该课程暂无介绍
          </div>
          <div class="btn">
            <button class="btn-item active">立即购买</button>
            <button class="btn-item" @click="onAddCart">加入购物车</button>
          </div>
        </div>
        <div class="video" v-for="item in chapters" :key="item.id">
          <div class="chapterName">{{ item.chapterName }}</div>
          <div class="chapterDesc">{{ item.description }}</div>
          <ul class="videos">
            <li class="video-item" v-for="subitem in item.children" :key="subitem.id">
              <div class="video-itemIcon">
                <i class="el-icon-video-camera"></i>
              </div>

              <div class="item-name">
                <span class="shipin">视频：</span>
                <span class="chapterName">{{ subitem.chapterName }}</span>
                <span class="free" v-if="subitem.publicType == '2'">试看</span>
              </div>
              <button class="btn-learn" @click="coursePlay(subitem,item)">开始学习</button>
              <div class="clearfloat"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="downLoadList">
        <div class="down" v-for="item in downLoadList" :key="item.id">
          <div class="source">
            <span class="downloadCourse">{{ item.attachmentName }}</span>
            <button class="downloadbtn" @click="downloadAttach(item)">下载资料</button>
          </div>
        </div>
      </div>
      <div v-else>
        <el-empty description="该课程暂无资料"></el-empty>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
//组件
import Header from '../components/common/Header.vue'
import Footer from '../components/common/Footer.vue'
import { reactive, ref } from '@vue/reactivity'
import { getCourseInfo, courseCheckAuth } from '../utils/api/courseManage.js'
import { addCart } from '../utils/api/cart.js'
import { onBeforeMount } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../store/user.js'
import { useCartStore } from '../store/cart.js'
import minix from '../mixins/courseType.js'
const { courseTypeFn } = minix()
const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const cartStore = useCartStore()
const courseId = route.params.id
// 课程详情数据
let courseInfo = ref({})
// "章节"和"下载资料"div的切换
let active = ref(true)
// 下载资料的内容
let downLoadList = ref([])
// 章节内容
let chapters = ref([])
const getImgSrc = avt => {
  return new URL(`../assets/img/teacher/${avt}`, import.meta.url).href
}
const onAddCart = async () => {
  let userId = userStore.userinfo.id
  const res = await addCart({ courseInfo: courseInfo.value, userId })
  if (res.status == 200) {
    ElMessage({
      type: 'success',
      message: '加入购物车成功'
    })
  } else {
    ElMessage({
      type: 'info',
      message: '该课程已在购物车中，添加失败'
    })
  }
}
onBeforeMount(async () => {
  // 获取课程详情数据
  const { courseInfo: res } = await getCourseInfo({ courseId })
  courseInfo.value = res
  chapters.value = res.chapters
  downLoadList.value = res.attachment
})
// 下载资料按钮
const downloadAttach = async item => {
  if (!userStore.token) {
    ElMessage({
      showClose: true,
      message: '请先登录',
      type: 'info'
    })
    router.push({ name: 'login' })
    return
  }
  const res = await courseCheckAuth({ courseId })
  // 没有权限，提示购买
  if (!res.hasAuth) {
    ElMessage({
      showClose: true,
      message: '购买后才可以下载',
      type: 'info'
    })
  }
  // 有权限，请求接口，拿到文件的blob流
  else {
    let fileName = item.attachmentName
    let fileUrl = item.attachmentUrl
    const link = document.createElement('a')
    // 修改所下载文件的文件名(强制下载)，但是必须同源（访问的域名和href的域名要一致）才会生效
    link.download = fileName
    link.style.display = 'none'
    // 这里应该将blob文件流转为URL，但接口未实现
    link.href = fileUrl
    document.body.appendChild(link)
    link.click()
    URL.revokeObjectURL(link.href)
    document.body.removeChild(link)
  }
}
// 开始学习按钮
const coursePlay = async (subitem, item) => {
  // 这里传入的参数是 小节 和 章节
  if (!userStore.token) {
    ElMessage({
      showClose: true,
      message: '请先登录',
      type: 'info'
    })
    router.push({ name: 'login' })
    return
  }
  const res = await courseCheckAuth({ courseId })
  // 没有权限，提示购买
  if (!res.hasAuth) {
    ElMessage({
      showClose: true,
      message: '购买后才可以学习',
      type: 'info'
    })
  }
  // 有权限，跳转页面（根据课程的id进行跳转）
  else {
    router.push({
      path: '/course-play/' + courseId + '/' + item.id + '/' + subitem.id
      // 课程id和章节id
    })
  }
}
</script>

<style lang="less" scoped>
.courseContainer {
  width: 100%;
  height: 100%;
  background: #f8fafc;
  overflow: hidden;
}
.main {
  margin: 40px auto;
  width: 1200px;
  height: 100%;
}
.courseInfoTop {
  width: 100%;
  height: 200px;
  background-image: url('../assets/img/course-bgc.png');
}
.nav-container {
  width: 1200px;
  margin: 0 auto;
  color: #333333;
  display: flex;
}
/* .chapter-item  .active{
    color: #388FFF;

} */
/* 背景部分开始 */
.courseInfoTop .info-container {
  margin: 0 auto;
  width: 1200px;
  height: 200px;
  color: #ffffff;
  z-index: 5;
}
.route {
  /*margin-left: 50px;*/
  padding-top: 20px;
  display: flex;
  font-size: 14px;
}
.route .route-item {
  margin: 0 10px;
}
.name {
  margin: 30px 0 10px 0px;
  font-size: 24px;
}
.info {
  display: flex;
  /*margin-left: 50px;*/
}
.info .Avat {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.info .Avat img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.teacherName {
  margin: 8px 0 0 8px;
}
.name-item {
  img {
    width: 40px;
    height: 28px;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
    margin-right: 10px;
    height: 25px;
    line-height: 25px;
  }
}
.access {
  margin: 0 0 0 100px;
  display: flex;
}
.access .access-item {
  margin-right: 10px;
  line-height: 60px;
}
/* 背景部分结束 */

/* 导航栏开始 */
.info-nav {
  width: 100%;

  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
.course {
  margin: 0 auto;
  width: 1200px;
}
.chapter {
  display: flex;
  font-weight: 600;
  color: #333333;
  margin-left: 50px;
  font-size: 20px;
}
.chapter-item {
  padding-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
  line-height: 80px;
  margin-right: 70px;
  cursor: pointer;
  position: relative;
}
.chapter-item .active1 {
  color: #388fff;
}
.chapter-item .active2 {
  position: absolute;
  width: 70%;
  top: 63px;
  left: calc(30% / 2);
  height: 4px;
  background: #388fff;
  border-radius: 2px;
}

/* 导航栏结束 */
/* 课程介绍开始 */
.introduction {
  /*margin-left: 50px;*/
  /*padding: 20px;*/
  width: 1210px;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.09);
}
.desc {
  padding: 20px;
  color: #474747;
  line-height: 35px;
}
.btn {
  float: right;
  margin-top: 10px;
  padding: 0 20px 20px;
}
.btn-item {
  width: 120px;
  height: 40px;
  /*margin: 0 20px 0 0;*/
  padding: 0px;
  border: 0px;
  outline: none;
  color: #f11d1d;
  border-radius: 23px;
  cursor: pointer;
}
.btn .active {
  background: #f11d1d !important;
  color: #ffffff;
  margin-right: 10px;
}
/* 课程介绍结束 */

/* 视频目录开始 */
.video {
  margin: 20px 0;
  padding: 20px;
  width: 1170px;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.09);
}
.video .chapterName {
  font-weight: bold;
  font-size: 20px;
  color: #333333;
}
.video .free {
  padding-left: 20px;
  font-size: 14px;
  color: #388fff;
}
.chapterDesc {
  margin: 10px 0;
  font-size: 13px;
  color: #5c5c5c;
}
.video-item {
  height: 40px;
  line-height: 40px;
  padding: 5px 0;
  /*margin: 0 0 10px 0;*/
  border-radius: 8px;
}
.video-item:hover {
  cursor: pointer;
  background: rgba(53, 133, 255, 0.2);
  border-radius: 8px;
  color: #388fff !important;
}
.video-item .shipin {
  color: #333333;
  font-weight: bold;
}
.video-item .chapterName {
  font-size: 16px;
  font-weight: 400;
  color: #333333;
}
.video-itemIcon,
.item-name {
  float: left;
  padding-left: 10px;
}
.btn-learn {
  margin: 5px 5px 0 0;
  float: right;
  right: -100px;
  width: 80px;
  height: 30px;
  line-height: 30px;
  border: 0px;
  outline: none;
  color: #fff;
  background: #388fff;
  border-radius: 12px;
  cursor: pointer;
}
.clearfloat {
  clear: both;
}
/* 视频目录结束 */
.source {
  margin: 2px 0;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.09);
}
.down {
  margin: 10px auto !important;
  width: 1200px;
  height: 100%;
  padding: 5px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
}
.down:first-child {
  margin: 40px 0 5px 0;
}
.downloadbtn {
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: #388fff;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
</style>