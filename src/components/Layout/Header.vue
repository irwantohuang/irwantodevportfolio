<script setup lang="ts">
import { menu } from '../../data/menu';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import MenuMobile from './MenuMobile.vue'

const route = useRoute()
const routeName = computed(() => route.name)

const menuVisibility = ref<boolean>(false);
const toggleMenuVisibility = () => menuVisibility.value = !menuVisibility.value;

</script>

<template>

    <header class="w-full h-[60px] lg:h-[75px] rounded-md overflow-hidden border border-black">
        <div class="container mx-auto h-full">

            <div class="flex items-center justify-between h-full">
                <h1 class="text-lg font-semibold text-primary-dark-200">{{ routeName }}</h1>

                <!-- {{ menuVisibility }} -->

                <nav>
                    <fa-icon @click="toggleMenuVisibility" class="text-2xl cursor-pointer transition-all duration-300 ease-in text-primary-dark-200 hover:text-primary" icon="fa-solid fa-border-all" />

                    <MenuMobile :menu="menu" :menuVisibility="menuVisibility"/>
                </nav>
            </div>
            

        </div>
    </header>

</template>