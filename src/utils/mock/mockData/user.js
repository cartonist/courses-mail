import tokenApi from './tempToken.js'
import { useUserStore } from '../../../store/user.js'
const userList = [
  {
    id: 1,
    nickName: '大丽丽',
    address: '2133',
    age: 25,
    avatar: 'user1.jpg',
    birthday: 20021010,
    city: '北京3cc3',
    county: null,
    vipInfo: {
      vipName: '12个月大会员',
      endTime: 1770404619000,
      isExpired: 0,
      startTime: 1638868619000,
      vipDesc: '学习能力，不断成长中'
    },
    courseInfo: [
      {
        courseId: 0,
        chapter: [
          {
            id: 0,
            children: [
              {
                id: 0,
                playTime: 0
              },
              {
                id: 1,
                playTime: 0
              }
            ]
          },
          {
            id: 1,
            children: [
              {
                id: 0,
                playTime: 0
              },
              {
                id: 1,
                playTime: 0
              }
            ]
          }
        ]
      }
    ]
  }
]
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
  getUserInfo: (config) => {
    const { tempToken } = param2Obj(config.url)
    const token = tokenApi.getToken()
    if(token == tempToken) {
      tokenApi.setToken('')
      // 获取本地的token （原本axios二次封装在请求拦截器中设置 req.headers['Authorization'] = token 后端可以直接读取）
      const localStr = localStorage.getItem('zhiheren')
      const localToken = JSON.parse(localStr)
      if(localToken.token == '202212130001') {
        return {
          code: 200,
          data: {
            status: 200,
            msg: '获取用户信息成功',
            data: userList[0]
          }
        }
      }
    }
    else {
      return {
        code: 200,
        data: {
          status: -100,
          msg: '获取用户信息失败'
        }
      }
    }
  },
  // 设置播放时间
  setPlayTime: config => {
    const { userId, courseId, chapterId, subChapterId, currentTime } = JSON.parse(config.body)
    userList.some(item => {
      if(item.id == userId){
        const course = item.courseInfo[courseId]
        const chapter = course.chapter[chapterId]
        const subChapter = chapter.children[subChapterId]
        subChapter.playTime = currentTime
        useUserStore().userCoursePlayTime = item.courseInfo
      }
    })
    // console.log(userList[userId-1].courseInfo)
    return {
      code: 200,
      data: {
        msg: '设置播放时间成功'
      }
    }
  },
  // 获取播放时间
  getPlayTime: config => {
    const { userId, courseId, chapterId, subChapterId } = JSON.parse(config.body)
    if(!useUserStore().userCoursePlayTime)
    return {
      code: 200,
      data: {
        subChapter: 0
      }
    }
    const userCoursePlayTime = useUserStore().userCoursePlayTime
    console.log(userCoursePlayTime)
    const course = userCoursePlayTime[courseId]
    const chapter = course.chapter[chapterId]
    const subChapter = chapter.children[subChapterId]

    return {
      code: 200,
      data: {
        data: {
          playTime: subChapter.playTime
        }
      }
    }
  }
}