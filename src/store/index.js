import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import cash from './modules/cash'
import myhosting from './modules/myhosting'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        cash,
        myhosting
    },
    getters
})

export default store