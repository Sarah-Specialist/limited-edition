import {createStore} from 'vuex';

export default createStore({
    state: {
        sizes: []
    },
    mutations: {
        SET_SIZES(state, sizes) {
            state.sizes = sizes;
        },
        ADD_SIZES(state, size) {
            state.sizes.push(size);
        },
        UPDATE_SIZES(state, {index, value}) {
            state.sizes[index] = value;
        }
    }
})