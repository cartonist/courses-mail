<template>
  <div class="navswiper-container">
    <el-carousel :interval="5000" arrow="always" v-if="courseList.length > 0">
      <el-carousel-item v-for="item in courseList" :key="item">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="navswiper-bottom">
      <ul class="course-type">
        <li>
          <img src="https://xuexiluxian.cn/resources/images/index/chuji.png" alt="">
          <div class="course-title">
            <p>初级课程</p>
            <span>入门课、岗位多</span>
          </div>
        </li>
        <li>
          <img src="https://xuexiluxian.cn/resources/images/index/zhongji.png" alt="">
          <div class="course-title">
            <p>中级课程</p>
            <span>进阶与实战</span>
          </div>
        </li>
        <li>
          <img src="https://xuexiluxian.cn/resources/images/index/xiangmu.png" alt="">
          <div class="course-title">
            <p>高级课程</p>
            <span>轻松掌握核心技能</span>
          </div>
        </li>
        <li>
          <img src="https://xuexiluxian.cn/resources/images/index/gaoji.png" alt="">
          <div class="course-title">
            <p>项目实战</p>
            <span>手把手实践</span>
          </div>
        </li>
        <li>
          <img src="https://xuexiluxian.cn/resources/images/index/suanfa.png" alt="">
          <div class="course-title">
            <p>前端算法</p>
            <span>拿捏前端技能</span>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { onBeforeMount } from '@vue/runtime-core'
import { getFirstCategorys } from '../../utils/api/courseManage.js'
let courseList = ref([])
const getFirstData = async () => {
  const res = await getFirstCategorys()
  courseList.value = res.list
}
onBeforeMount(() => {
  getFirstData()
})
</script>

<style lang="less" scoped>
.navswiper-container {
  height: 500px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
}
.navswiper-bottom {
  height: 20%;
  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      display: flex;

      img {
        width: 50px;
        height: 50px;
      }
      .course-title {
        margin-left: 10px;
        p {
          font-size: 18px;
          font-weight: 700;
          height: 25px;
          line-height: 25px;
        }
        span {
          font-size: 14px;
          height: 21px;
          line-height: 21px;
          color: #808080;
        }
      }
    }
  }
}
.el-carousel {
  height: 80%;
  border-radius: 8px 8px 0 0;
  :deep(.el-carousel__container) {
    height: 100%;
  }
}
.el-carousel__item {
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

