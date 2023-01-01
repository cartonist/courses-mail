import request from './request'
export const getFirstCategorys = () => {
  return request({
    url: '/course/getFirstCategorys',
    mock: true
  })
}
export const getNewCourseData = () => {
  return request({
    url: '/course/getNewCourses',
    mock: true
  })
}
export const getCourseDirection = () => {
  return request({
    url: '/course/getDirection',
    mock: true
  })
}
export const getCourseCata = (params) => {
  return request({
    url: '/course/getCatalog',
    mock: false,
    method: 'get',
    data: params
  })
}
export const getCourseList = (params) => {
  return request({
    url: '/course/getCourse',
    mock: false,
    method: 'get',
    data: params
  })
}
export const getCourseInfo = (params) => {
  return request({
    url: '/course/getInfo',
    mock: false,
    method: 'get',
    data: params
  })
}
export const courseCheckAuth = (params) => {
  return request({
    url: '/course/checkAuth',
    mock: false,
    method: 'get',
    data: params
  })
}
export const getPlayInfo = (params) => {
  return request({
    url: '/course/play',
    mock: false,
    method: 'get',
    data: params
  })
}

