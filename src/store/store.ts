import { createStore } from "vuex";
import { RootState } from "./types";
import { data } from "./modules/data";

export const store = createStore<RootState> ({
    modules: {
        data
    }
})