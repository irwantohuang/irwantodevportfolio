import { createStore } from "vuex";
import { RootState } from "./types";
import { data } from "./modules/data";
import { modal } from "./modules/modal";
import { loader } from "./modules/loaders";

export const store = createStore<RootState> ({
    modules: {
        data,
        modal,
        loader
    }
})