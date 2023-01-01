import request from "../api/request.js"

export const getUserInfo = (params) => {
  return request({
    url: '/user/getUserInfo',
    mock: false,
    method: 'get',
    data: params
  })
}
export const setPlayTime = data => {
  return request({
    url: '/user/setPlayTime',
    mock: false,
    method: 'post',
    data: data
  })
}
export const getPlayTime = data => {
  return request({
    url: '/user/getPlayTime',
    mock: false,
    method: 'post',
    data
  })
}