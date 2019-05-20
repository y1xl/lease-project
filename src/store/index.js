import Vue from 'vue'
import Vuex from 'vuex'

import cash from './cash'
import myhosting from './myhosting'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        cash,
        myhosting
    }
})

export default store