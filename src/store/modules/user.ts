import { loginApi, getInfoApi, loginOutApi } from '@/api/user'
import { ActionContext } from 'vuex'

interface State {
  token: string,
  info: object
}
const state = (): State => ({
  token: '', // 登录token
  info: {},  // 用户信息
})

// getters
const getters = {
  token(state: State) {
    return state.token
  }
}

// mutations
const mutations = {
  tokenChange(state: State, token: string) {
    state.token = token
  },
  infoChange(state: State, info: object) {
    state.info = info
  }
}

// actions
const actions = {
  // login by login.vue
  login({ commit, dispatch }: ActionContext<State, State>, params: any) {
    return new Promise((resolve, reject) => {
      loginApi(params)
      .then(res => {
        commit('tokenChange', res.data.token)
        dispatch('getInfo', { token: res.data.token })
        .then(infoRes => {
          resolve(res.data.token)
        })
      })
    })
  },
  // get user info after user logined
  getInfo({ commit }: ActionContext<State, State>, params: any) {
    return new Promise((resolve, reject) => {
      getInfoApi(params)
      .then(res => {
        commit('infoChange', res.data.info)
        resolve(res.data.info)
      })
    })
  },

  // login out the system after user click the loginOut button
  loginOut({ commit }: ActionContext<State, State>) {
    loginOutApi()
    .then(res => {

    })
    .catch(error => {

    })
    .finally(() => {
      localStorage.removeItem('tabs')
      localStorage.removeItem('vuex')
      location.reload()
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}