import { createStore } from "vuex";
import { RootState } from "./types";
import { loader } from "./modules/loaders";

export const store = createStore<RootState> ({
    modules: {
        loader
    }
})