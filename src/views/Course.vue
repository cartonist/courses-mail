<template>
  <div class="course-container">
    <!-- 标签分类 -->
    <div class="course-tags">
      <!-- 课程方向 -->
      <div class="course-direction">
        <span class="title">课程方向：</span>
        <el-tag :effect="tagId['courseDir'] === 0?'dark':'plain'" size="large" @click="onClickChange('courseDir',0)">全部</el-tag>
        <el-tag v-for="item in courseDirection" :key="item.id" class="mx-1" :effect="tagId['courseDir'] === item.id?'dark':'plain'" size="large" @click="onClickChange('courseDir',item.id)">
          {{ item.direction }}
        </el-tag>
      </div>
      <!-- 课程分类 -->
      <div class="course-catalog">
        <span class="title">课程分类：</span>
        <el-tag :effect="tagId['courseCata'] === 0?'dark':'plain'" size="large" @click="onClickChange('courseCata',0)">全部</el-tag>
        <el-tag v-for="item in courseCata" :key="item.id" class="mx-1" :effect="tagId['courseCata'] === item.id?'dark':'plain'" size="large" @click="onClickChange('courseCata',item.id)">
          {{ item.type }}
        </el-tag>
      </div>
      <!-- 课程难度 -->
      <div class="course-diff">
        <span class="title">课程难度：</span>
        <el-tag :effect="tagId['courseDif'] === 0?'dark':'plain'" size="large" @click="onClickChange('courseDif',0)">全部</el-tag>
        <el-tag v-for="item in courseDiff" :key="item.code" class="mx-1" :effect="tagId['courseDif'] === item.code?'dark':'plain'" size="large" @click="onClickChange('courseDif',item.code)">
          {{ item.level }}
        </el-tag>
      </div>
    </div>
    <!-- 课程列表 -->
    <div class="newcourse-container">
      <div class="newcourse-head">
        <ul class="newcourse-head-left">
          <li @click="onClickAll" :style="courseSort == '0'?'color: #2c80FF':''">综合</li>
          <li>|</li>
          <li @click="onClickNewCourse" :style="courseSort == '1'?'color: #2c80FF':''">最新课程</li>
          <li>|</li>
          <li @click="onClickMaxSale" :style="courseSort == '2'?'color: #2c80FF':''">最多购买</li>
          <li>|</li>
          <li @click="onClickPrice">
            <span :style="courseSort == '3' || courseSort == '4'?'color: #2c80FF':''">价格</span>
            <span class="arrow">
              <el-icon :style="courseSort == '3'?'color: #2c80FF':''">
                <CaretTop />
              </el-icon>
              <el-icon :style="courseSort == '4'?'color: #2c80FF':''">
                <CaretBottom />
              </el-icon>
            </span>
          </li>
        </ul>
        <div class="mb-2 flex items-center text-sm">
          <el-radio-group v-model="radio" class="ml-4">
            <el-radio label="1" size="large">免费课程</el-radio>
            <el-radio label="2" size="large">会员课程</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="newcourse-body">
        <el-card v-for="item in courseList" :key="item.title" shadow="always">
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
    <el-pagination background layout="prev, pager, next" :current-page="courseListConfig.page" :total="totalPage" :page-size="courseListConfig.limit" @current-change="onChangePage" />
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { onBeforeMount, watch } from '@vue/runtime-core'
import { getCourseDirection, getCourseCata, getCourseList } from '../utils/api/courseManage.js'
import minix from '../mixins/courseType.js'
const { courseTypeFn } = minix()
// 课程方向的数据
const courseDirection = ref([])
// 课程分类的数据
const courseCata = ref([])
// 课程列表
const courseList = ref([])
// 课程筛选的条件（查询参数）
let courseListConfig = reactive({
  page: 1,
  limit: 8,
  queryCourseParams: {
    courseDir: 0,
    courseCata: 0,
    courseDif: 0,
    courseIsFree: 0,
    courseIsMember: 0,
    courseSortType: 0
  }
})
let tagId = reactive({
  courseDir: 0,
  courseCata: 0,
  courseDif: 0
})
// 免费和会员课程的标记
const radio = ref('0')
// 课程难度数据
const courseDiff = ref([
  {
    level: '初级',
    code: 1
  },
  {
    level: '中级',
    code: 2
  },
  {
    level: '高级',
    code: 3
  }
])
// 课程总数
let totalPage = ref(0)
// 课程排序的方式
let courseSort = ref('0')
// 获取课程列表
const getCourse = async courseListConfig => {
  const res = await getCourseList(courseListConfig)
  courseList.value = res.courseList
  totalPage.value = res.count
}
// 获取课程分类
const getCourseCataFn = async params => {
  const res = await getCourseCata(params)
  courseCata.value = res.cataList
}
const onClickChange = (type, id) => {
  tagId[type] = id
  if (type === 'courseDir') {
    tagId['courseCata'] = 0
    tagId['courseDif'] = 0
    // 清空免费和会员课程的状态
    courseListConfig.queryCourseParams.courseIsMember = 0
    courseListConfig.queryCourseParams.courseIsFree = 0
    radio.value = '0'

    courseListConfig.queryCourseParams.courseDir = id
    courseListConfig.queryCourseParams.courseCata = 0
    courseListConfig.queryCourseParams.courseDif = 0
    // 更新二级标签列表
    getCourseCataFn({ type: courseListConfig.queryCourseParams.courseDir })
  } else if (type === 'courseCata') {
    tagId['courseDif'] = 0
    // 清空免费和会员课程的状态
    courseListConfig.queryCourseParams.courseIsMember = 0
    courseListConfig.queryCourseParams.courseIsFree = 0
    radio.value = '0'

    courseListConfig.queryCourseParams.courseCata = id
    courseListConfig.queryCourseParams.courseDif = 0
  } else {
    courseListConfig.queryCourseParams.courseDif = id
  }
  // 页码置为1
  courseListConfig.page = 1
  getCourse(courseListConfig)
}
watch(radio, (newVal, oldVal) => {
  // 选中免费课
  if (newVal == '1') {
    courseListConfig.queryCourseParams.courseIsMember = 0
    courseListConfig.queryCourseParams.courseIsFree = 1
  } else if (newVal == '2') {
    //选中会员课
    courseListConfig.queryCourseParams.courseIsFree = 0
    courseListConfig.queryCourseParams.courseIsMember = 1
  }
  // page置为初始值1
  courseListConfig.page = 1
  getCourse(courseListConfig)
})
const onClickAll = () => {
  courseSort.value = '0'
  courseListConfig.queryCourseParams.courseSortType = 0
  // page置为初始值1
  courseListConfig.page = 1
  getCourse(courseListConfig)
}
const onClickNewCourse = () => {
  courseSort.value = '1'
  courseListConfig.queryCourseParams.courseSortType = 1
  courseListConfig.page = 1
  getCourse(courseListConfig)
}
const onClickMaxSale = () => {
  courseSort.value = '2'
  courseListConfig.queryCourseParams.courseSortType = 2
  courseListConfig.page = 1
  getCourse(courseListConfig)
}
const onClickPrice = () => {
  if (courseSort.value == '4' || courseSort.value != '3') {
    courseSort.value = '3'
    courseListConfig.queryCourseParams.courseSortType = 3
  } else if (courseSort.value == '3') {
    courseSort.value = '4'
    courseListConfig.queryCourseParams.courseSortType = 4
  }
  courseListConfig.page = 1
  getCourse(courseListConfig)
}
onBeforeMount(async () => {
  // 获取课程方向
  let res = await getCourseDirection()
  courseDirection.value = res.list
  // 获取课程分类
  getCourseCataFn()
  // 获取课程列表
  getCourse(courseListConfig)
})
// 换页时同步更换课程
const onChangePage = val => {
  // 直接js修改current-page绑定值时候，页码值显示会对应改变（响应式），但是current-change事件不触发
  courseListConfig.page = val
  getCourse(courseListConfig)
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  color: #000;
}
.course-tags {
  margin-bottom: 20px;
  overflow: hidden;
  div {
    margin: 20px 0;
    // font-size: 25px;
    .title {
      font-size: 16px;
      font-weight: 700;
    }
  }
  .el-tag {
    margin: 0 10px;
  }
}
.newcourse-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  .newcourse-head-left {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      height: 20px;
      line-height: 20px;
      display: flex;
      .arrow {
        display: flex;
        flex-direction: column;
        justify-content: center;
        i {
          margin: -4px 0;
        }
      }
    }
  }
  .el-radio {
    font-weight: 700;
  }
}
.newcourse-body {
  display: flex;
  // justify-content: center;
  flex-wrap: wrap;
  .el-card {
    width: 300px;
    height: 300px;
    border: 0;
    border-radius: 8px;
    margin: 20px 30px 20px 0;
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
.el-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>