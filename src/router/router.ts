import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { store } from "../store/store";

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    store.dispatch("loader/startLoading")
    next();
})

router.afterEach(() => {
    store.dispatch("loader/endLoading")
})