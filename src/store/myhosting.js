const state = {
    // postDeliSession
    datetext: "",
    timequantum: "",
    getaddress: '',
    getlocation: '',
    postnum:'', // postDeli
}

const mutations = {
    setdatetext(state, val) {
        state.datetext = val
    },
    settimequantum(state, val) {
        state.timequantum = val
    },
    setgetaddress(state, val) {
        state.getaddress = val
    },
    setgetlocation(state, val) {
        state.getlocation = val
    },
    allclear(state){
        state.datetext = '',
        state.timequantum = '',
        state.getaddress = '',
        state.getlocation = '',
        state.postnum = ''
    },
    // postDeli
    setpostnum(state, val) {
        state.postnum = val
    },
}

const actions = {
    setdatetext: ({ commit }, val) => {
        commit('setdatetext', val)
    },
    settimequantum: ({ commit }, val) => {
        commit('settimequantum', val)
    },
    setgetaddress: ({ commit }, val) => {
        commit('setgetaddress', val)
    },
    setgetlocation: ({ commit }, val) => {
        commit('setgetlocation', val)
    },
    allclear: ({ commit }) => {
        commit('allclear')
    },
    // postDeli
    setpostnum: ({ commit }, val) => {
        commit('setpostnum', val)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}