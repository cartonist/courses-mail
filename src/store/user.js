import { defineStore } from 'pinia'
export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      token: '',
      userinfo: {},
      userCoursePlayTime: {}
    }
  },
  actions: {
    // 设置token
    setToken( token ){
      this.token = token;
    },
    // 置空token
    clearToken() {
      this.token = ''
      this.userinfo = {}
      this.userCoursePlayTime = {}
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [{
      key: 'zhiheren',
      storage: localStorage,
    }]
  }
})