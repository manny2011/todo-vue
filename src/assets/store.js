import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'//提取出来专门管理 mutation handlers !
import actions from './actions.js'//

Vue.use(Vuex)

const getters = {//相当于computed
  ifFooterShow(state) {
    return state.list.length > 0
  },
  itemLeftCount(state) {//剩余未完成数
    return state.list.filter(item => !item.done).length
  },
  ifClearCompletedShow(state) {//是否有一个
    return state.list.some(item => item.done)
  }

}
//vuex允许将store分成多个moudle，分开去管理不同的业务数据与操作
const store = new Vuex.Store({
  strict: true,
  state: {
    list: [
      { id: 1, name: '888', done: true },
      { id: 2, name: '888', done: true },
      { id: 3, name: '888', done: false },
    ]
  },
  mutations,
  actions,
  getters
})

export default store;