import { createStore } from "vuex";
import { RootState } from "./types";
import { data } from "./modules/data";
import { modal } from "./modules/modal";

export const store = createStore<RootState> ({
    modules: {
        data,
        modal
    }
})