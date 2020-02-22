import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '秦皇岛'
    },
    //应为没有异步操作所以不需要调用actions 直接调用commit方法
    // actions: {
    //     changeCity (ctx, city) {
    //         ctx.commit('changeCity', city)
    //     }
    // },
    mutations: {
        changeCity (state, city) {
            state.city = city
        }
    }
})
