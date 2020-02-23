import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    //应为没有异步操作所以不需要调用actions 直接调用commit方法
    // actions: {
    //     changeCity (ctx, city) {
    //         ctx.commit('changeCity', city)
    //     }
    // },
    mutations
    // getters: {
    //     doubleCity (state) {
    //         return state.city + ' ' + state.city
    //     }
    // }
})
