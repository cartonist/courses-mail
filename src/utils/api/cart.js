import request from "../api/request.js"

export const getCartList = (params) => {
  return request({
    url: '/cart/getCartList',
    mock: false,
    method: 'get',
    data: params
  })
}
export const deleteCart = (params) => {
  return request({
    url: '/cart/deleteCart',
    mock: false,
    method: 'get',
    data: params
  })
}
export const addCart = (data) => {
  return request({
    url: '/cart/addCart',
    mock: false,
    method: 'post',
    data: data
  })
}

