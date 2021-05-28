import { loginApi } from '@/api/user'
const state = () => ({
  token: '', // 登录token
  info: {},  // 用户信息
})

// mutations
const mutations = {
  tokenChange(state: any, token: string) {
    state.token = token
  },
  infoChange(state: any, info: any) {
    state.info = info
  }
}

// actions
const actions = {
  login({ commit }, params: any) {
    return new Promise((resolve, reject) => {
      loginApi(params)
      .then(res => {
        
      })
    }) 
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}