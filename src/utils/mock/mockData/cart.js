// import { useUserStore } from '../../../store/user.js'
const cartList = [
  {
    userId: 1,
    cartItems: [
      {
        courseId: 0,
        price: '66',
        title: '前端',
        couter: 1,
        imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
      },
      {
        courseId: 1,
        price: '20',
        title: '可视化',
        couter: 1,
        imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
      },
      {
        courseId: 2,
        price: '0',
        title: '可视化入门',
        couter: 1,
        imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/8b3a973ba7524344a05ea6627faa66cd.png',
      },
      {
        courseId: 3,
        price: '13',
        title: '可视化豪华版',
        couter: 1,
        imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/8b3a973ba7524344a05ea6627faa66cd.png',
      },
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
  // 根据用户id获取购物车信息
  getCartList: config => {
    const { id } = param2Obj(config.url)
    let cartItems = null
    cartList.some( item => {
      if( item.userId == id) {
        cartItems = item.cartItems
      }
    })
    return {
      code: 200,
      data: {
        msg: '获取购物车信息成功',
        data: cartItems
      }
    }
  },
  deleteCart: (config) => {
    const { userId, courseId } = param2Obj(config.url)
    cartList.some(item => {
      if(item.userId == userId) {
        item.cartItems = item.cartItems.filter( item => item.courseId != courseId )
      }
    })
    return {
      code: 200,
      data: {
        msg: '删除购物车数据成功',
        status: 200
      }
    }
  },
  // 加入购物车
  addCart: config => {
    const {courseInfo, userId} = JSON.parse(config.body)
    console.log(courseInfo,userId)
    let cartItems = null
    cartList.some(item => {
      if(item.userId == userId) {
        cartItems = item.cartItems
      }
    })
    let status = 200
    cartItems.some(item => {
      if(item.courseId == courseInfo.id) {
        status = 201
        return true
      }
    })
    if(status == 200) {
      courseInfo.price = courseInfo.price.substring(1)
      courseInfo.courseId = courseInfo.id
      cartItems.push(courseInfo)
    }
    console.log(cartList)
    return {
      code: 200,
      data: {
        status
      }
    }
  }
  
}