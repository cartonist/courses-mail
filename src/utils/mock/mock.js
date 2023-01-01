import Mock from 'mockjs'
import courseApi from './mockData/course.js'
import loginApi from './mockData/login.js'
import tokenApi from './mockData/tempToken.js'
import userApi from './mockData/user.js'
import cartApi from './mockData/cart.js'
import orderApi from './mockData/order.js'

Mock.mock(/course\/getCourse/, courseApi.getCourseList)
Mock.mock(/course\/getCatalog/,courseApi.getCourseCata)
Mock.mock(/course\/getInfo/,courseApi.getCourseInfo)
Mock.mock(/login\/Login/, loginApi.login)
Mock.mock(/login\/loginByMobile/,loginApi.loginByMobile)   
Mock.mock(/token\/createToken/,tokenApi.createToken)  
Mock.mock(/user\/getUserInfo/,userApi.getUserInfo)
Mock.mock(/course\/checkAuth/,courseApi.getCourseAuth)
Mock.mock(/course\/play/,courseApi.getPlayInfo)    
Mock.mock(/user\/setPlayTime/,userApi.setPlayTime)
Mock.mock(/user\/getPlayTime/,userApi.getPlayTime)
Mock.mock(/cart\/getCartList/,cartApi.getCartList)
Mock.mock(/cart\/deleteCart/,cartApi.deleteCart)
Mock.mock(/cart\/addCart/,cartApi.addCart)
Mock.mock(/cart\/getOrderList/,orderApi.getOrderList)