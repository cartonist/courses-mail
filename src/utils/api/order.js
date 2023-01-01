// import request from "../api/request.js"
import request from '@/utils/api/request.js'
export const getOrderList = (data) => {
  return request({
    url: '/cart/getOrderList',
    mock: false,
    method: 'post',
    data: data
  })
}
// export const alipayOrder = (data) => {
//   return request({
//     url: '/api/pay/alipay/createOrder',
//     method: 'post',
//     data
//   })
// }