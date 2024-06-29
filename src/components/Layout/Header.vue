<script setup lang="ts">
import { menu } from '../../data/menu';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import MenuMobile from './MenuMobile.vue'
import ProfileMobile from './ProfileMobile.vue';
import Overlay from './Overlay.vue'
import Icon from '../../ui/common/Icon.vue';


const route = useRoute()
const routeName = computed(() => {
    if (route.name === 'PortfolioDetail') return 'Portfolio'
    else return route.name;
})

const menuVisibility = ref<boolean>(false);
const toggleMenuVisibility = () => menuVisibility.value = !menuVisibility.value;

const profileVisibility = ref<boolean>(false);
const toggleProfileVisibility = () => profileVisibility.value = !profileVisibility.value


const darkMode = ref(true);
const toggleAppearance = () => {
    darkMode.value = !darkMode.value;
    localStorage.appearance = darkMode.value ? 'dark' : 'light'
    toggleBodyClass();
}

const toggleBodyClass = () => {
    const htmlElement = document.querySelector('html');
    if (htmlElement && darkMode) {
        htmlElement.classList.toggle('dark', darkMode.value);
    }
}

const getAppearance = () => {
    if (localStorage.appearance === 'dark' || (!('appearance' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        darkMode.value = true;
        toggleBodyClass();
    } else {
        darkMode.value = false
    }
}

onMounted(() => {
    getAppearance()
})


const buttons = ref([
    { id: 1, icon: 'fa-solid fa-user', onClick: () => toggleProfileVisibility() },
    { id: 2, icon: 'fa-solid fa-border-all', onClick: () => toggleMenuVisibility() },
    { id: 3, icon: darkMode.value ? 'fa-solid fa-moon' : 'fa-solid fa-sun', onClick: () => toggleAppearance() },
])

</script>

<template>

    <header
        class="w-full h-[60px] lg:h-[75px] px-2 rounded-md overflow-hidden bg-primary-light-200 dark:bg-primary-dark-300 shadow-sm">
        <div class="container mx-auto h-full">

            <div class="flex items-center justify-between h-full">
                <div class="relative">
                    <h1 class="text-xl font-semibold text-accent-200 dark:text-accent">{{ routeName }}</h1>
                    <hr class="border-t-2 border-t-accent-200 dark:border-accent w-2/5">
                </div>

                <nav class="flex h-full gap-4 items-center">
                    <div class="flex order-2 gap-2">
                        <Icon v-for="button in buttons" @click="button.onClick"
                            class="w-[35px] h-[35px] text-2xl icon-non-bg icon-outline"
                            :class="button.id === 3 ? '' : 'lg:hidden'"
                            :icon="button.icon" /> 
                    </div>


                    <MenuMobile :menu="menu" :menuVisibility="menuVisibility"
                        @toggle-menu-visibility="toggleMenuVisibility()" />
                    <Overlay :active="menuVisibility" @toggle-menu-visibility="toggleMenuVisibility()" />
                    <ProfileMobile :profileVisibility="profileVisibility"
                        @toggle-profile-visibility="toggleProfileVisibility()" />

                    <ul class="hidden lg:flex items-center justify-center gap-8 h-full px-4">
                        <li v-for="data in menu" :key="data.id">
                            <router-link :to="{ name: data.name }"
                                class="font-semibold text-base transition-all duration-100 ease-in hover:text-accent-200 dark:hover:text-accent"
                                active-class="text-primary hover:text-accent-200 dark:text-accent dark:hover:text-primary-200">
                                {{ data.name }}
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>


        </div>
    </header>

</template>