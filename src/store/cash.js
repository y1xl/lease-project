const state = {
    bankcard: null
}

const mutations = {
    setval(state, val) {
        state.bankcard = val
    }
}

const actions = {
    setval: ({ commit }, val) => {
        commit('setval', val)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}