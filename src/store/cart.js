import { defineStore } from 'pinia'
export const useCartStore = defineStore({
  id: 'cart',
  state: () => {
    return {
      cartList: [], // 购物车数据
      select: [], //选中的商品的id
      orderList: [] //选中的商品id（送往支付的id）
    }
  },
  // 相当于计算属性
  getters: {
    isChecked() {
      return this.select.length == this.cartList.length
    },
    total() {
      let total = {
        count: 0,
        sum: 0,
      }
      this.orderList = []
      this.cartList.forEach(item => {
        if(this.select.indexOf(item.courseId) > -1) {
          // select中有对应id，即可选了才需要统计
          total.count = this.select.length
          total.sum += parseInt(item.price)
          this.orderList.push(item.courseId)
        }
      })
      return total
    }
  },
  actions: {
    // 存储购物车数据
    addCart( list ) {
      this.select = []
      list.forEach( v => {
        // 给每条记录加上check属性
        v['check'] = true
        this.select.push( v.courseId )
      })
      this.cartList = list
    },
    // 全选
  all() {
    this.select = this.cartList.map( v=> {
      // check全置为true，并且select中的id都选上
      v['check'] = true
      return v.courseId
    })
  },
  // 全部选
  unAll() {
    // check全置为false
    this.cartList.forEach( v => {
      v['check'] = false
    })
    // select直接清空
    this.select = []
  },
  itemChecked( index ){
    let id = this.cartList[index].courseId 
    let idx = this.select.indexOf(id)
    if (idx > -1) {
      // 如果select中有cartList中第index项的id，则对应项的check置为false，select删除掉id
      this.cartList[index].check = false
      this.select.splice(idx, 1)
    } else {
      this.cartList[index].check = true
      this.select.push( id )
    } 
  }
  },
})