import request from "./request"

export const createToken = () => {
  return request({
    url: '/token/createToken',
    mock: false,
    method: 'get'
  })
}