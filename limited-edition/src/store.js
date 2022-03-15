import {createStore} from 'vuex';

export default createStore({
    state: {
        size: []
    },
    getters: {
        size: function(state) {
            return `${state.size}`
        }
    },
    actions: {
        addToSize(context, payload) {
            const size = context.state.size
            size.push(payload)
            context.commit('update_size', size)
        }
    },
    mutations: {
        update_size(state, payload) {
            state.size = payload
        }
    }
})