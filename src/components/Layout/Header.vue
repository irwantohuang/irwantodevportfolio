<script setup lang="ts">
import { menu } from '../../data/menu';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import MenuMobile from './MenuMobile.vue'
import ButtonIcon from '../../ui/common/ButtonIcon.vue';
import ProfileMobile from './ProfileMobile.vue';
import Overlay from './Overlay.vue'

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
                    <div class="flex lg:hidden gap-2">
                        <ButtonIcon @click="toggleProfileVisibility()" icon="fa-solid fa-user" />
                        <ButtonIcon @click="toggleMenuVisibility()" icon="fa-solid fa-border-all" />
                        <ButtonIcon @click="toggleAppearance()" class="order-2"
                            :icon="darkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" />
                    </div>

                    <ButtonIcon @click="toggleAppearance()" class="order-2 hidden lg:flex"
                        :icon="darkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" />

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