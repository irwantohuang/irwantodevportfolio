import { ActionTree, Module, MutationTree } from "vuex"
import { RootState } from "../types"

export interface ModalState {
    baseModal: boolean
}

const state: ModalState = {
    baseModal: false
}

const actions: ActionTree<ModalState, RootState> = {
    toggleModal({ commit }) {
        commit("SET_BASE_MODAL")
    }
}

const mutations: MutationTree<ModalState> = {
    SET_BASE_MODAL(state) {
        state.baseModal = !state.baseModal;
    }
}

export const modal: Module<ModalState, RootState> = {
    namespaced: true,
    state,
    actions, 
    mutations
}