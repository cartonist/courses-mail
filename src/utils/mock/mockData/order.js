// const alipaySdk = require('./alipay.js')
// const AlipaySdk = require('alipay-sdk').default
// const alipaySdk = new AlipaySdk({
//   appId: '2021000121696816',
//   signType: 'RSA2',
//   gateway: 'https://openapi.alipaydev.com/gateway.do',
//   alipayPublicKey:'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnt84Hr9P+gmCZHEpHrtd/QpEXPzn4ePqhAxrFuUZ9F6/g6hzGXLBD1xvAcLREdi3Qh9iSMdICQEcwZ2PHJwvLjx9JSECbAQntiWAW+e4nJKCL8Dc4a4JHmUrt57nxwnQonHZaS+nYAqIHQa0UKkTPsSib5QYnlLaxYr0D21jhpQ+NWXNNy/WjchSY7r8VYloyHXtTvdyHnmRLfM5+/m9e8d/aute0Gw7gV8i1Xb06P8bD8Nk8T4kUm+NT4F461G8yrY1+xKckOHovRfdEZ+1xovpx3YGK6X8xRQXOhhA5ubRwhxV8nlJ6GgaNCl/V6eTlv/XLsraAYOsTA5baGGgvwIDAQAB',
//   privateKey: 'MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCP27C1JereaZqUgUptRMdMWC0Xf/5ra9b8sx+t/AtfbJDYUeHBmNMjffW6wIzlu21P4o38GIBkt362fZoBPbZbT7muzSEr9yDVy3uD9P5wJ7iJ80Hg84acGIJFwfJPe1YavSwoBvhC5+fX48TozhR95diuJT7fZtqous4Fo3q8QDk/9FHqGn90UKHnIEYsqYSIUzPNr2gtcbcOQ6wdUxkccRGiibi+nn/k2mOmyd02PcyQHmxS0jAOhSNXkk49Z2O5+3/t8YclxME7Dsyp+y91qil5CbgRl+1SZJNfFflzNxIdlNwW1cQC4hee9PLfiXh4fzYgoXwZun/nKrhFNT6VAgMBAAECggEAd7XRLm0HLV2jjMCqNpNtZVJa85tHFA0BMfe8/QMoU5f8UIaS3o9V48sFmQpyNRnqtPdKP+YDscwgXavXZAD+pq2JTrTUTcmwQTi65+wPbzUek20h/RephGvAvFvQT+PKmyWggQ6LuOFSRIz9Zt1WoA2Mah4EW9MzUgVhO7/2en+XWbp0UPHU6xqTijocgy8qY4aFER3ZuwStS5rjAsiU5Olrei1j0weWgUPa5zdDjwLVYe26vH0VQsvJqfS90UNKsglx5mMdeY8DraLyenvgveeWwUlgwDyE3D1YZatldsHpAwG46S573hjfldiHK/GhKnwaICYhn21R8fG4HVq+YQKBgQDJyBwg1Y1VITBKCbJuHQMM216CsP9gqY7x+JE3yPN4tNIAbVVsgFrnHiLCabdvj+RUpJHtY8AaUAK+7XhJP9ni8Jz3lBATvIZMPAcGQNzGg9VD8tJpE+V8HjSGUStopmxO3QOE1iK3sd2p8I9DtHSv20G/BQZ+vDSIm5r8DwQqFwKBgQC2gzbyk2otAWAdaOAC9aVtaTSkYhwYEnH1ahQGKNUhyYfITNvU+OzEQkGUpNI8pqhPOkiAsD66OkeZwCS5JHPfi7mePtGfcGVDLcpgA+IVmxUNluOXzI2A5cQtL4vN441dRbMey/MNdYjG1qdXWRR/La60OXWA2bd0Y2P54NuEMwKBgBm+HuCNfhdzQX7gl9P2fZIhVoBj5mDFoQf7x0MPrwgiQXxudmx+P5qmvJaC+DUSbXXi/P8FL9frhz4me6cUr06FlfD8AcUS0ytcqSTCF6h33zho/TEMqcVY8SiFqH0UZlL1XWKQEyPOXFI274AawJxC47NkB70Zc7ZN68rme4iHAoGANFPunyIQ4RJx4jy9bVvMsE/nnfHbKDOxpLFjSFjQsr07RvxyUt+D0slEUD/pXyZRP1Xwj6T4dyBagwSKAuMmrcM71tkf9Nyey+IHEfxLB/LM2HaYjl9BeuFlm6b0KHXDhCiFsKC88PDv5EKK/Ao4TDZmzplizSye4qnUckI77e0CgYADZzr5DO7M+cyqII0yiYNTJArm9bwwDhGIh4qtawzGuPE1zTNYvRBa0+FZ60ZYJBYZ5v0miqDW80QM7jx+3D2xsyQWv4m3ZPr6YYZvpk1UypyKopIWP00H3Rk0JvHmPjVsxTI6d9wqlinflkfE3hyeVd0pn3a8BduuU99yAhDFGw=='
// })
// const AlipayFormData = require('alipay-sdk/lib/form').default

// 所有课程列表
const list = [
  {
    id: 0,
    title: '前端',
    count: '38690',
    price: '￥66',
    dirId: 2,
    cataId: 6,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202112081543'
  },
  {
    id: 1,
    title: '可视化',
    count: '4908',
    price: '￥20',
    dirId: 2,
    cataId: 6,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/8b3a973ba7524344a05ea6627faa66cd.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202202081542'
  },
  {
    id: 2,
    title: '可视化入门',
    count: '49',
    price: '￥0',
    dirId: 2,
    cataId: 6,
    level: 1,
    isFree: 1,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/8b3a973ba7524344a05ea6627faa66cd.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212081541'
  },
  {
    id: 3,
    title: '可视化豪华版',
    count: '49010',
    price: '￥13',
    dirId: 2,
    cataId: 6,
    level: 1,
    isFree: 0,
    isMember: 1,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/8b3a973ba7524344a05ea6627faa66cd.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212091540'
  },
  {
    id: 4,
    title: 'uni-app',
    count: '330099',
    price: '￥76',
    dirId: 2,
    cataId: 6,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/5e2d3df5e1b34a7296c90a1ed659fba8.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212081433'
  },
  {
    id: 5,
    title: 'react',
    count: '20609',
    price: '￥85',
    dirId: 2,
    cataId: 7,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/dcba83a005174035b53fbf33692a2263.png',
    direction: '前端',
    type: 'react',
    releaseTime: '202212101523'
  },
  {
    id: 6,
    title: 'vue',
    count: '4900',
    price: '￥50',
    dirId: 2,
    cataId: 6,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/db152cbb99c4430db306a6d5cc325a31.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212081513'
  },
  {
    id: 7,
    title: 'vue小白版',
    count: '490',
    price: '￥0',
    dirId: 2,
    cataId: 6,
    level: 2,
    isFree: 1,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/db152cbb99c4430db306a6d5cc325a31.png',
    direction: '前端',
    type: 'vue',
    releaseTime: '202212081503'
  },
  {
    id: 8,
    title: 'linux',
    count: '1169',
    price: '￥28',
    dirId: 4,
    cataId: 8,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/bec0e9d499a64773a41abe061cd68de7.png',
    direction: '运维',
    type: 'linux',
    releaseTime: '202212081443'
  },
  {
    id: 9,
    title: 'spring',
    count: '3819',
    price: '￥66',
    dirId: 1,
    cataId: 9,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212081343'
  },
  {
    id: 10,
    title: 'Ajax',
    count: '38691',
    price: '￥66',
    dirId: 2,
    cataId: 4,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'Ajax',
    releaseTime: '202212081243'
  },
  {
    id: 11,
    title: 'Axios',
    count: '99619',
    price: '￥56',
    dirId: 2,
    cataId: 4,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'Ajax',
    releaseTime: '202212081143'
  },
  {
    id: 12,
    title: 'javaweb',
    count: '38636',
    price: '￥106',
    dirId: 1,
    cataId: 9,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212081043'
  },
  {
    id: 13,
    title: 'unix',
    count: '38622',
    price: '￥66',
    dirId: 4,
    cataId: 8,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '运维',
    type: 'linux',
    releaseTime: '202212080543'
  },
  {
    id: 14,
    title: 'unix入门',
    count: '38630',
    price: '￥0',
    dirId: 4,
    cataId: 8,
    level: 2,
    isFree: 1,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '运维',
    type: 'linux',
    releaseTime: '202212071543'
  },
  {
    id: 15,
    title: 'Git',
    count: '38655',
    price: '￥66',
    dirId: 2,
    cataId: 5,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/b404044ed42346b58d61ddffcf395c7d.jpg',
    direction: '前端',
    type: 'git',
    releaseTime: '202212061543'
  },
  {
    id: 16,
    title: 'node.js',
    count: '38657',
    price: '￥66',
    dirId: 2,
    cataId: 3,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'node.js',
    releaseTime: '202212051543'
  },
  {
    id: 17,
    title: 'node.js进阶',
    count: '38659',
    price: '￥66',
    dirId: 2,
    cataId: 3,
    level: 2,
    isFree: 0,
    isMember: 1,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'node.js',
    releaseTime: '202212041543'
  },
  {
    id: 18,
    title: 'java',
    count: '38600',
    price: '￥6',
    dirId: 1,
    cataId: 1,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212031543'
  },
  {
    id: 19,
    title: 'SpringBoot',
    count: '3862',
    price: '￥6',
    dirId: 1,
    cataId: 9,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212021543'
  },
  {
    id: 20,
    title: 'SpringMVC',
    count: '38612',
    price: '￥69',
    dirId: 1,
    cataId: 9,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/b404044ed42346b58d61ddffcf395c7d.jpg',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212011543'
  },
  {
    id: 21,
    title: 'SpringCloud',
    count: '38649',
    price: '￥80',
    dirId: 1,
    cataId: 9,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202212001543'
  },
  {
    id: 22,
    title: 'SpringCloud企业级',
    count: '3830',
    price: '￥80',
    dirId: 1,
    cataId: 9,
    level: 3,
    isFree: 0,
    isMember: 1,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202211081543'
  },
  {
    id: 23,
    title: 'SpringCloud基础',
    count: '3840',
    price: '￥19',
    dirId: 1,
    cataId: 9,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202202081543'
  },
  {
    id: 24,
    title: 'SSM',
    count: '38656',
    price: '￥66',
    dirId: 1,
    cataId: 9,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/45a1c2e545ff4c76a2d7dc61e82ba237.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202112081543'
  },
  {
    id: 25,
    title: 'SSM进阶',
    count: '3870',
    price: '￥66',
    dirId: 1,
    cataId: 9,
    level: 3,
    isFree: 0,
    isMember: 1,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/45a1c2e545ff4c76a2d7dc61e82ba237.png',
    direction: 'java',
    type: 'spring',
    releaseTime: '202112081542'
  },
  {
    id: 26,
    title: 'H5+c3',
    count: '3861',
    price: '￥8',
    dirId: 2,
    cataId: 2,
    level: 2,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/ff576cb951034e82a55b5c57190edc4a.png',
    direction: '前端',
    type: 'html+css',
    releaseTime: '202112081533'
  },
  {
    id: 27,
    title: 'H5+c3拔高',
    count: '3867',
    price: '￥10',
    dirId: 2,
    cataId: 2,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/b0a014c975e745ba8cf0acc246a89a4d.png',
    direction: '前端',
    type: 'html+css',
    releaseTime: '202112081523'
  },
  {
    id: 28,
    title: 'Git入门',
    count: '3869',
    price: '￥66',
    dirId: 2,
    cataId: 5,
    level: 1,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/b0a014c975e745ba8cf0acc246a89a4d.png',
    direction: '前端',
    type: 'git',
    releaseTime: '202112081443'
  },
  {
    id: 29,
    title: 'unix提升',
    count: '3860',
    price: '￥100',
    dirId: 4,
    cataId: 8,
    level: 3,
    isFree: 0,
    isMember: 0,
    imgUrl: 'https://oss.xuexiluxian.cn/xiaoluxian-vcr/cabdd8e705344456ba9768f5eeb665d6.jpg',
    direction: '运维',
    type: 'linux',
    releaseTime: '202112081243'
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
  getOrderList: config => {
    const { orderList } = JSON.parse(config.body)
    console.log(config.body)
    // console.log(alipaySdk)
    let order = []
    let total = 0
    orderList.forEach(item => {
      order.push(list[item])
      let price = list[item].price.substring(1)
      total += parseInt(price)
    })
    return {
      code: 200,
      data: {
        msg: '获取购物车信息成功',
        data: {
          order,
          total,
          payModes: [
            {
              code: 'wxpayment',
              description: '微信支付'
            },
            {
              code: 'alipayment',
              description: '支付宝支付'
            }
          ]
        }
      }
    }
  }
  
}