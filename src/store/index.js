import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        books: null
    },
    getters: {},
    mutations: {
        changeBooks(state, val) {
            state.books = val
        },
    },
    actions: {},
    modules: {}
})

