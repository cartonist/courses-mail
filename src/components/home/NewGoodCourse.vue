<template>
  <div class="newcourse-container">
    <h2 class="content-title">
      <div class="content-title-left">
        <div class="hot">
          <div class="hot-left">HOT</div>
          <div class="hot-right"></div>
        </div>
        <div class="txt">
          <div class="txt-top">新上好课</div>
          <div class="txt-bottom"></div>
        </div>
      </div>
    </h2>
    <div class="newcourse-content">
      <el-card v-for="item in newCourse" :key="item.title" shadow="always">
        <router-link :to="{ path: '/course-info/' + item.id }">
          <img :src="item.imgUrl" />
          <div class="label">
            <div class="title">{{ item.title }}</div>
            <div class="count">{{courseTypeFn(item.level)}} · {{item.count }}报名</div>
            <div class="price">{{ item.price }}</div>
          </div>
        </router-link>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from '@vue/runtime-core'
import { getNewCourseData } from '../../utils/api/courseManage.js'
import minix from '../../mixins/courseType.js'
let newCourse = ref([])
const { courseTypeFn } = minix()
const getNewCourse = async () => {
  const res = await getNewCourseData()
  newCourse.value = res.list
}
onMounted(() => {
  getNewCourse()
})
</script>


<style lang="less" scoped>
a {
  text-decoration: none;
  color: #000;
}
.newcourse-container {
  overflow: hidden;
  .content-title {
    margin-top: 20px;
  }
}
.content-title-left {
  display: flex;
  .hot {
    display: flex;
    height: 38px;
    .hot-left {
      height: 38px;
      font-size: 20px;
      padding: 0 10px;
      text-align: center;
      line-height: 37px;
      color: #ffffff;
      border-radius: 8px 0 8px 8px;
      background: linear-gradient(90deg, #ff727f 0%, #fc685c 100%);
    }
    .hot-right {
      width: 0;
      height: 0;
      border: 6px solid #fc685c;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }
  }
  .txt {
    position: relative;
    height: 38px;
    z-index: 50;
    .txt-top {
      font-size: 24px;
      padding: 0 5px;
      color: #333333;
      line-height: 31px;
      font-weight: 700;
    }
    .txt-bottom {
      position: absolute;
      top: 25px;
      left: 0px;
      width: 100%;
      height: 13px;
      background: linear-gradient(90deg, #fbf84f 0%, #fea935 100%);
      border-radius: 7px;
      z-index: -1;
    }
  }
}
.newcourse-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-card {
    width: 300px;
    height: 300px;
    border: 0;
    border-radius: 8px;
    margin: 20px 0;
    transition: 0.2s;
    &:hover {
      transform: translateY(-5px);
    }
    :deep(.el-card__body) {
      padding: 0;
      height: 100%;
      img {
        width: 100%;
        height: 200px;
      }
    }
  }
  .label {
    box-sizing: border-box;
    padding: 10px;
    .title {
      font-size: 20px;
      font-weight: 700;
    }
    .count {
      color: gray;
      font-size: 14px;
      padding: 5px 0;
    }
    .price {
      font-size: 20px;
      color: red;
      margin: 5px;
    }
  }
}
</style>