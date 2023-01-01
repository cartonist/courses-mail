import Mock from 'mockjs'
let tempToken = ''
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
  setToken: (token) => {
    tempToken = token
  },
  getToken: () => {
    return tempToken
  },
  // createToken: (config) => {
  //   const { token } = param2Obj(config.url)
  //   tempToken = token
  //   return {
  //     code: 200,
  //     data: {
  //       tempToken
  //     }
  //   }
  // }
  createToken: () => {
    tempToken = Mock.Random.guid()
    return {
      code: 200,
      data: {
        tempToken
      }
    }
  }
}