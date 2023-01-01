// get请求从config.url获取参数，post从config.body中获取参数
import { Decrypt } from '../../aes.js'
import Mock from 'mockjs'
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
  login: (config) => {
    // 解析JSON格式的data后，在进行解密，得到username和password
    const username = Decrypt(JSON.parse(config.body).username)
    const password = Decrypt(JSON.parse(config.body).password)
    if (username == 'admin' && password == 'admin')
    {
      return {
        code: 200,
        data: {
          token: '202212130001',
          status: 200,
          msg: '登录成功'
        }
      }
    }
    else if (username == 'xiao' && password == 'admin') {
      return {
        code: 200,
        data: {
          token: '202212130002',
          status: 200,
          msg: '登录成功'
        }
      }
    }
    else {
      return {
        code: 200,
        data: {
          status: -100,
          msg: '账号或密码错误'
        }
      }
    }
  },
  loginByMobile: (config) => {
    const { phone } = param2Obj(config.url)
    if (phone == 13929423158){
      return {
        code: 200,
        data: {
          token: '202212130001',
          status: 200,
          msg: '登录成功'
        }
      }
    }
    else {
      return {
        code: 200,
        data: {
          status: -100,
          msg: '手机或验证码错误'
        }
      }
    }
  }
}