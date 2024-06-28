import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { store } from "../store/store";

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const shouldShowLoader =
        (to.name === 'PortfolioDetail' && from.name === 'Portfolio') ||
        (to.name === 'Portfolio' && from.name === 'PortfolioDetail');

    if (!shouldShowLoader) {
        store.dispatch("loader/startLoading");
    }
    next();
});

router.afterEach((to, from) => {
    const shouldShowLoader =
        (to.name === 'PortfolioDetail' && from.name === 'Portfolio') ||
        (to.name === 'Portfolio' && from.name === 'PortfolioDetail');

    if (!shouldShowLoader) {
        store.dispatch("loader/endLoading");
    }
});   