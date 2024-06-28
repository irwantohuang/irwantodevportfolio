import type { App } from 'vue';

import { FaIcon } from './fontAwesome';
import { router } from '../router/router';
import { store } from '../store/store';
import { Swiper, SwiperSlide } from 'swiper/vue'


// Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


export function registerPlugins(app: App) {
    app
        .use(router)
        .use(store)
        .component('fa-icon', FaIcon)
        .component('swiper', Swiper)
        .component('swiper-slide', SwiperSlide)
}