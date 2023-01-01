import { getCourseCata } from "../../api/courseManage"
// import { useUserStore } from "../../../store/user"
// const userStore = useUserStore()
const list = [
  {
    id: 0,
    title: '前端',
    count: '38690',
    price: '￥66',
    dirId: 2,
    cataId: 6,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202112081543'
  },
  {
    id: 1,
    title: '可视化',
    count: '4908',
    price: '￥20',
    dirId: 2,
    cataId: 6,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/8b3a973ba7524344a05ea6627faa66cd.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202202081542'
  },
  {
    id: 2,
    title: '可视化入门',
    count: '49',
    price: '￥0',
    dirId: 2,
    cataId: 6,
    level: 1,
    isFree: 1,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/8b3a973ba7524344a05ea6627faa66cd.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212081541'
  },
  {
    id: 3,
    title: '可视化豪华版',
    count: '49010',
    price: '￥13',
    dirId: 2,
    cataId: 6,
    level: 1,
    isFree: 0,
    isMember: 1,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/8b3a973ba7524344a05ea6627faa66cd.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212091540'
  },
  {
    id: 4,
    title: 'uni-app',
    count: '330099',
    price: '￥76',
    dirId: 2,
    cataId: 6,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/5e2d3df5e1b34a7296c90a1ed659fba8.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212081433'
  },
  {
    id: 5,
    title: 'react',
    count: '20609',
    price: '￥85',
    dirId: 2,
    cataId: 7,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/dcba83a005174035b53fbf33692a2263.png',
    direction: '前端',
    type: 'react',
    releaseTime: '202212101523'
  },
  {
    id: 6,
    title: 'vue',
    count: '4900',
    price: '￥50',
    dirId: 2,
    cataId: 6,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/db152cbb99c4430db306a6d5cc325a31.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212081513'
  },
  {
    id: 7,
    title: 'vue小白版',
    count: '490',
    price: '￥0',
    dirId: 2,
    cataId: 6,
    level: 2,
    isFree: 1,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/db152cbb99c4430db306a6d5cc325a31.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212081503'
  },
  {
    id: 8,
    title: 'linux',
    count: '1169',
    price: '￥28',
    dirId: 4,
    cataId: 8,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/bec0e9d499a64773a41abe061cd68de7.png',
    direction: '运维',
    type: 'linux',
    releaseTime: '202212081443'
  },
  {
    id: 9,
    title: 'spring',
    count: '3819',
    price: '￥66',
    dirId: 1,
    cataId: 9,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212081343'
  },
  {
    id: 10,
    title: 'Ajax',
    count: '38691',
    price: '￥66',
    dirId: 2,
    cataId: 4,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'Ajax',
    releaseTime: '202212081243'
  },
  {
    id: 11,
    title: 'Axios',
    count: '99619',
    price: '￥56',
    dirId: 2,
    cataId: 4,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'Ajax',
    releaseTime: '202212081143'
  },
  {
    id: 12,
    title: 'javaweb',
    count: '38636',
    price: '￥106',
    dirId: 1,
    cataId: 9,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212081043'
  },
  {
    id: 13,
    title: 'unix',
    count: '38622',
    price: '￥66',
    dirId: 4,
    cataId: 8,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '运维',
    type: 'linux',
    releaseTime: '202212080543'
  },
  {
    id: 14,
    title: 'unix入门',
    count: '38630',
    price: '￥0',
    dirId: 4,
    cataId: 8,
    level: 2,
    isFree: 1,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '运维',
    type: 'linux',
    releaseTime: '202212071543'
  },
  {
    id: 15,
    title: 'Git',
    count: '38655',
    price: '￥66',
    dirId: 2,
    cataId: 5,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/b404044ed42346b58d61ddffcf395c7d.jpg',
    direction: '前端',
    type: 'git',
    releaseTime: '202212061543'
  },
  {
    id: 16,
    title: 'node.js',
    count: '38657',
    price: '￥66',
    dirId: 2,
    cataId: 3,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'node.js',
    releaseTime: '202212051543'
  },
  {
    id: 17,
    title: 'node.js进阶',
    count: '38659',
    price: '￥66',
    dirId: 2,
    cataId: 3,
    level: 2,
    isFree: 0,
    isMember: 1,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'node.js',
    releaseTime: '202212041543'
  },
  {
    id: 18,
    title: 'java',
    count: '38600',
    price: '￥6',
    dirId: 1,
    cataId: 1,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212031543'
  },
  {
    id: 19,
    title: 'SpringBoot',
    count: '3862',
    price: '￥6',
    dirId: 1,
    cataId: 9,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212021543'
  },
  {
    id: 20,
    title: 'SpringMVC',
    count: '38612',
    price: '￥69',
    dirId: 1,
    cataId: 9,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/b404044ed42346b58d61ddffcf395c7d.jpg',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212011543'
  },
  {
    id: 21,
    title: 'SpringCloud',
    count: '38649',
    price: '￥80',
    dirId: 1,
    cataId: 9,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212001543'
  },
  {
    id: 22,
    title: 'SpringCloud企业级',
    count: '3830',
    price: '￥80',
    dirId: 1,
    cataId: 9,
    level: 3,
    isFree: 0,
    isMember: 1,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202211081543'
  },
  {
    id: 23,
    title: 'SpringCloud基础',
    count: '3840',
    price: '￥19',
    dirId: 1,
    cataId: 9,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202202081543'
  },
  {
    id: 24,
    title: 'SSM',
    count: '38656',
    price: '￥66',
    dirId: 1,
    cataId: 9,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/45a1c2e545ff4c76a2d7dc61e82ba237.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202112081543'
  },
  {
    id: 25,
    title: 'SSM进阶',
    count: '3870',
    price: '￥66',
    dirId: 1,
    cataId: 9,
    level: 3,
    isFree: 0,
    isMember: 1,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/45a1c2e545ff4c76a2d7dc61e82ba237.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202112081542'
  },
  {
    id: 26,
    title: 'H5+c3',
    count: '3861',
    price: '￥8',
    dirId: 2,
    cataId: 2,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'html+css',
    releaseTime: '202112081533'
  },
  {
    id: 27,
    title: 'H5+c3拔高',
    count: '3867',
    price: '￥10',
    dirId: 2,
    cataId: 2,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/b0a014c975e745ba8cf0acc246a89a4d.png',
    direction: '前端',
    type: 'html+css',
    releaseTime: '202112081523'
  },
  {
    id: 28,
    title: 'Git入门',
    count: '3869',
    price: '￥66',
    dirId: 2,
    cataId: 5,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/b0a014c975e745ba8cf0acc246a89a4d.png',
    direction: '前端',
    type: 'git',
    releaseTime: '202112081443'
  },
  {
    id: 29,
    title: 'unix提升',
    count: '3860',
    price: '￥100',
    dirId: 4,
    cataId: 8,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/cabdd8e705344456ba9768f5eeb665d6.jpg',
    direction: '运维',
    type: 'linux',
    releaseTime: '202112081243'
  }
]
// 课程详情数据
const infoList = [
  {
    id: 0,
    title: '前端',
    count: '38690',
    views: '10000990',
    price: '￥66',
    teacher: '王老师',
    teacherAvt: 'WangDachui.webp',
    chapters: [
      {
        id: 0,
        chapterName: '章节1',
        description: '序言部分，准备起飞',
        children: [
          {
            id: 0,
            chapterName: '第一节: 什么是前端',
            publicType: '2'
          },
          {
            id: 1,
            chapterName: '第二节: 什么是后端',
            publicType: '1'
          }
        ]
      },
      {
        id: 1,
        chapterName: '章节2',
        description: '第一节，冲冲冲',
        children: [
          {
            id: 0,
            chapterName: '第一节: 1 + 1 = 2',
            publicType: '2'
          },
          {
            id: 1,
            chapterName: '第二节: 2 + 2 = 4',
            publicType: '1'
          }
        ]
      }
    ],
    attachment: [
      {
        id: 0,
        attachmentName: '课前预习PPT',
        attachmentSize: 0,
        attachmentUrl: 'https://download.oracle.com/java/19/archive/jdk-19.0.1_linux-aarch64_bin.tar.gz'
      },
      {
        id: 1,
        attachmentName: '课后练习',
        attachmentSize: 0,
        attachmentUrl: 'https://fonts.gstatic.com/s/googlesans/v45/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjIUvQ.woff2'
      }
    ],
    dirId: 2,
    cataId: 6,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202112081543'
  },
  {
    id: 1,
    title: '可视化',
    count: '4908',
    price: '￥20',
    dirId: 2,
    cataId: 6,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/8b3a973ba7524344a05ea6627faa66cd.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202202081542'
  },
  {
    id: 2,
    title: '可视化入门',
    count: '49',
    price: '￥0',
    dirId: 2,
    cataId: 6,
    level: 1,
    isFree: 1,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/8b3a973ba7524344a05ea6627faa66cd.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212081541'
  },
  {
    id: 3,
    title: '可视化豪华版',
    count: '49010',
    price: '￥13',
    dirId: 2,
    cataId: 6,
    level: 1,
    isFree: 0,
    isMember: 1,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/8b3a973ba7524344a05ea6627faa66cd.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212091540'
  },
  {
    id: 4,
    title: 'uni-app',
    count: '330099',
    price: '￥76',
    dirId: 2,
    cataId: 6,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/5e2d3df5e1b34a7296c90a1ed659fba8.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212081433'
  },
  {
    id: 5,
    title: 'react',
    count: '20609',
    price: '￥85',
    dirId: 2,
    cataId: 7,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/dcba83a005174035b53fbf33692a2263.png',
    direction: '前端',
    type: 'react',
    releaseTime: '202212101523'
  },
  {
    id: 6,
    title: 'vue',
    count: '4900',
    price: '￥50',
    dirId: 2,
    cataId: 6,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/db152cbb99c4430db306a6d5cc325a31.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212081513'
  },
  {
    id: 7,
    title: 'vue小白版',
    count: '490',
    price: '￥0',
    dirId: 2,
    cataId: 6,
    level: 2,
    isFree: 1,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/db152cbb99c4430db306a6d5cc325a31.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212081503'
  },
  {
    id: 8,
    title: 'linux',
    count: '1169',
    price: '￥28',
    dirId: 4,
    cataId: 8,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/bec0e9d499a64773a41abe061cd68de7.png',
    direction: '运维',
    type: 'linux',
    releaseTime: '202212081443'
  },
  {
    id: 9,
    title: 'spring',
    count: '3819',
    price: '￥66',
    dirId: 1,
    cataId: 9,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212081343'
  },
  {
    id: 10,
    title: 'Ajax',
    count: '38691',
    price: '￥66',
    dirId: 2,
    cataId: 4,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'Ajax',
    releaseTime: '202212081243'
  },
  {
    id: 11,
    title: 'Axios',
    count: '99619',
    price: '￥56',
    dirId: 2,
    cataId: 4,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'Ajax',
    releaseTime: '202212081143'
  },
  {
    id: 12,
    title: 'javaweb',
    count: '38636',
    price: '￥106',
    dirId: 1,
    cataId: 9,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212081043'
  },
  {
    id: 13,
    title: 'unix',
    count: '38622',
    price: '￥66',
    dirId: 4,
    cataId: 8,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '运维',
    type: 'linux',
    releaseTime: '202212080543'
  },
  {
    id: 14,
    title: 'unix入门',
    count: '38630',
    price: '￥0',
    dirId: 4,
    cataId: 8,
    level: 2,
    isFree: 1,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '运维',
    type: 'linux',
    releaseTime: '202212071543'
  },
  {
    id: 15,
    title: 'Git',
    count: '38655',
    price: '￥66',
    dirId: 2,
    cataId: 5,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/b404044ed42346b58d61ddffcf395c7d.jpg',
    direction: '前端',
    type: 'git',
    releaseTime: '202212061543'
  },
  {
    id: 16,
    title: 'node.js',
    count: '38657',
    price: '￥66',
    dirId: 2,
    cataId: 3,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'node.js',
    releaseTime: '202212051543'
  },
  {
    id: 17,
    title: 'node.js进阶',
    count: '38659',
    price: '￥66',
    dirId: 2,
    cataId: 3,
    level: 2,
    isFree: 0,
    isMember: 1,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'node.js',
    releaseTime: '202212041543'
  },
  {
    id: 18,
    title: 'java',
    count: '38600',
    price: '￥6',
    dirId: 1,
    cataId: 1,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212031543'
  },
  {
    id: 19,
    title: 'SpringBoot',
    count: '3862',
    price: '￥6',
    dirId: 1,
    cataId: 9,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212021543'
  },
  {
    id: 20,
    title: 'SpringMVC',
    count: '38612',
    price: '￥69',
    dirId: 1,
    cataId: 9,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/b404044ed42346b58d61ddffcf395c7d.jpg',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212011543'
  },
  {
    id: 21,
    title: 'SpringCloud',
    count: '38649',
    price: '￥80',
    dirId: 1,
    cataId: 9,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212001543'
  },
  {
    id: 22,
    title: 'SpringCloud企业级',
    count: '3830',
    price: '￥80',
    dirId: 1,
    cataId: 9,
    level: 3,
    isFree: 0,
    isMember: 1,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202211081543'
  },
  {
    id: 23,
    title: 'SpringCloud基础',
    count: '3840',
    price: '￥19',
    dirId: 1,
    cataId: 9,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202202081543'
  },
  {
    id: 24,
    title: 'SSM',
    count: '38656',
    price: '￥66',
    dirId: 1,
    cataId: 9,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/45a1c2e545ff4c76a2d7dc61e82ba237.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202112081543'
  },
  {
    id: 25,
    title: 'SSM进阶',
    count: '3870',
    price: '￥66',
    dirId: 1,
    cataId: 9,
    level: 3,
    isFree: 0,
    isMember: 1,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/45a1c2e545ff4c76a2d7dc61e82ba237.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202112081542'
  },
  {
    id: 26,
    title: 'H5+c3',
    count: '3861',
    price: '￥8',
    dirId: 2,
    cataId: 2,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'html+css',
    releaseTime: '202112081533'
  },
  {
    id: 27,
    title: 'H5+c3拔高',
    count: '3867',
    price: '￥10',
    dirId: 2,
    cataId: 2,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/b0a014c975e745ba8cf0acc246a89a4d.png',
    direction: '前端',
    type: 'html+css',
    releaseTime: '202112081523'
  },
  {
    id: 28,
    title: 'Git入门',
    count: '3869',
    price: '￥66',
    dirId: 2,
    cataId: 5,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/b0a014c975e745ba8cf0acc246a89a4d.png',
    direction: '前端',
    type: 'git',
    releaseTime: '202112081443'
  },
  {
    id: 29,
    title: 'unix提升',
    count: '3860',
    price: '￥100',
    dirId: 4,
    cataId: 8,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/cabdd8e705344456ba9768f5eeb665d6.jpg',
    direction: '运维',
    type: 'linux',
    releaseTime: '202112081243'
  }
]
const typeList = [
  {
    id: 1,
    dirId: 1,
    type: 'java'
  },
  {
    id: 2,
    dirId: 2,
    type: 'html+css'
  },
  {
    id: 3,
    dirId: 2,
    type: 'node.js'
  },
  {
    id: 4,
    dirId: 2,
    type: 'Ajax'
  },
  {
    id: 5,
    dirId: 2,
    type: 'git'
  },
  {
    id: 6,
    dirId: 2,
    type: 'vue'
  },
  {
    id: 7,
    dirId: 2,
    type: 'react'
  },
  {
    id: 8,
    dirId: 4,
    type: 'linux'
  },
  {
    id: 9,
    dirId: 1,
    type: 'spring'
  },
  {
    id: 10,
    dirId: 6,
    type: '人工神经网络'
  },
  {
    id: 11,
    dirId: 5,
    type: '单片机'
  },
  {
    id: 12,
    dirId: 3,
    type: '数据库'
  }
]
// 用户的课程权限
const courseAuth = [
  {
    user: '202212130001',
    buy: ['0'],
    isMember: '1'
  }
]
// 课程播放相关的数据
const playList = [
  {
    courseId: 0,
    chapters: [
      {
        id: 0,
        children: [
          {
            id: 0,
            playUrl: 'https://ak.picdn.net/shutterstock/videos/1081965617/preview/stock-footage-luxury-villa-with-swimming-pool-naples-florida-directly-above-ascending-view.mp4'
          },
          {
            id: 1,
            playUrl: 'https://ak.picdn.net/shutterstock/videos/1054168013/preview/stock-footage-happy-kid-in-park-in-field-kid-run-his-arms-to-side-games-in-park-in-airplane-pilot-chidhood.mp4'
          }
        ]
      },
      {
        id: 1,
        children: [
          {
            id: 0,
            playUrl: 'https://mazwai.com/videvo_files/video/free/2018-01/small_watermarked/171124_H1_005_preview.webm'
          },
          {
            id: 1,
            playUrl: 'https://ak.picdn.net/shutterstock/videos/1057700104/preview/stock-footage-slow-motion-woman-feet-walking-barefoot-by-beach-at-golden-sunset-leaving-footprints-in-sand.mp4'
          }
        ]
      }
    ]
  }
]
// get请求从config.url获取参数，post从config.body中获取参数
function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search).replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"') +
    '"}'
  )
}
export default {
  // 获取列表
  getCourseList: config => {

    const params = (param2Obj(config.url))
    // 转存查询参数
    const data = {
      page: params.page,
      limit: params.limit,
      courseDir: params["queryCourseParams[courseDir]"],
      courseCata: params["queryCourseParams[courseCata]"],
      courseDif: params["queryCourseParams[courseDif]"],
      courseIsFree: params["queryCourseParams[courseIsFree]"],
      courseIsMember: params["queryCourseParams[courseIsMember]"],
      courseSortType: params["queryCourseParams[courseSortType]"]
    }
    // let dirList = list
    // let cataList = list
    // let difList = list

    // if(data.courseDir != 0) {
    //   dirList = list.filter(item => item.dirId == data.courseDir)
    // }
    // if(data.courseCata != 0) {
    //   cataList = dirList.filter( item => item.cataId == data.courseCata)
    // }
    // else {
    //   cataList = dirList
    // }
    // if(data.courseDif != 0) {
    //   difList = cataList.filter( item => item.level == data.courseDif)
    // }
    // else {
    //   difList = cataList
    // }
    let dataList = [...list]
    if(data.courseDir != 0) {
      dataList = list.filter(item => item.dirId == data.courseDir) //返回一个新的数组
    }
    if(data.courseCata != 0) {
      dataList = dataList.filter( item => item.cataId == data.courseCata)
    }
    if(data.courseDif != 0) {
      dataList = dataList.filter( item => item.level == data.courseDif)
    }
    if(data.courseIsFree != 0) {
      dataList = dataList.filter( item => item.isFree == data.courseIsFree)
    }
    if(data.courseIsMember != 0) {
      dataList = dataList.filter( item => item.isMember == data.courseIsMember)
    }
    if(data.courseSortType != '0') {
      switch(data.courseSortType) {
        case '1':
          dataList = dataList.sort((a, b) => { return b.releaseTime - a.releaseTime})
          break
        case '2':
          dataList = dataList.sort((a, b) => { return b.count - a.count})
          break
        case '3':
          dataList = dataList.sort((a, b) => { return a.price.substring(1) - b.price.substring(1)})
          break
          case '4':
            dataList = dataList.sort((a, b) => { return b.price.substring(1) - a.price.substring(1)})
          break
      }
    }
    const pageList = dataList.filter((item, index) => index < data.limit * data.page && index >= data.limit * (data.page - 1))
    
    return {
      code: 200,
      data:{
        count: dataList.length,
        courseList: pageList
      }
    }
  },
  getCourseCata: config => {
    const{ type = 0 } = param2Obj(config.url)
    if(type == 0) {
      return {
        code: 200,
        data: {
          cataList: typeList
        }
      }
    }
    if(type !=0 ) {
      const CataList = typeList.filter(item => item.dirId == type)
      return {
        code: 200,
        data: {
          cataList: CataList
        }
      }
    }
  },
  getCourseInfo: (config) => {
    const params = param2Obj(config.url)
    // const item = infoList.filter(item => item.id == params.courseId)
    // const courseInfo = item[0]
    let courseInfo = null
    infoList.forEach(item => {
      if(item.id == params.courseId)
      courseInfo = item
    })
    return {
      code: 200,
      data: {
        courseInfo
      }
    }
  },
  // 获取课程权限
  getCourseAuth: (config) => {
    const {courseId} = param2Obj(config.url)
    // const token = userStore.token
    const tokenObj = JSON.parse(localStorage.getItem('zhiheren'))
    const token = tokenObj.token
    let auth = null
    courseAuth.some(item => {
      if(item.user == token){
        auth = item
        return true
      }
    })
    const buy = auth.buy
    if (buy.includes(courseId)){
      return {
        code: 200,

        data: {
          hasAuth: true
        }
      }
    } else {
      return {
        code: 200,
        data: {
          hasAuth: false
        }
      }
    }
  },
  // 获取课程播放数据
  getPlayInfo: (config) => {
    const { courseId, chapterId, subChapterId } = param2Obj(config.url)
    console.log(courseId, chapterId, subChapterId)
    // 课程的基本数据
    let courseInfo = null
    infoList.some( item => {
      if(item.id == courseId) {
        courseInfo = item
        return true
      }
    })
    // 章节数据
    let chapterInfo = null
    infoList.some( item => {
      if(item.id == courseId) {
        chapterInfo = item.chapters[chapterId]
        return true
      }
    })
    // 播放数据
    let playInfo = null
    playList.some( item => {
      if(item.courseId == courseId) {
        playInfo = item.chapters[chapterId].children[subChapterId]
        console.log(playInfo)
        return true
      }
    })
    return {
      code: 200,
      data: {
        courseInfo,
        chapterInfo,
        playInfo
      }
    }
  },
  // 设置课程播放时间
  setPlayTime: config => {

  }
}