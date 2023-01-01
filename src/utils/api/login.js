import request from './request.js'
export const Login= (data) => {
  return request({
    url: '/login/Login',
    mock: false,
    method: 'post',
    data
  })
}
export const sendCaptcha = ( params ) => {
  return request({
    url: '/api/sms/sendRegisterOrLoginCaptcha',
    mock: false,
    method: 'get',
    data: params
  })
}
// export const loginByMobile = ( data ) => {
//   return request({
//     url: '/api/u/loginByMobile',
//     mock: false,
//     method: 'post',
//     data
//   })
// }

// 该方法不做验证仅返回token
export const loginByMobile = (params) => {
  return request({
    url: '/login/loginByMobile',
    mock: false,
    method: 'get',
    data: params
  })
}