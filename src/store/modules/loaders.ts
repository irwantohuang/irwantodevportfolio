import { ActionTree, Module, MutationTree } from "vuex"
import { RootState } from "../types"

export interface LoaderState {
    loader: boolean
}

const state: LoaderState = {
    loader: false
}

const actions: ActionTree<LoaderState, RootState> = {
    startLoading({ commit }) {
        commit("SET_LOADER", true)
    },

    endLoading({ commit }) {
        setTimeout(() => {
            commit("SET_LOADER", false)
        }, 500);
    }
}

const mutations: MutationTree<LoaderState> = {
    SET_LOADER(state) {
        state.loader = !state.loader
    }
}

export const loader: Module<LoaderState, RootState> = {
    namespaced: true, 
    state, 
    actions,
    mutations
}