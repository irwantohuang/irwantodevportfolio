import type { App } from 'vue';

import { FaIcon } from './fontAwesome';
import { router } from '../router/router';
import { store } from '../store/store';

export function registerPlugins(app: App) {
    app
        .use(router)
        .use(store)
        .component('fa-icon', FaIcon)
}