<script setup lang="ts">
import { menu } from '../../data/menu';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import MenuMobile from './MenuMobile.vue'
import ButtonIcon from '../../ui/common/ButtonIcon.vue';
import ProfileMobile from './ProfileMobile.vue';

const route = useRoute()
const routeName = computed(() => route.name)

const menuVisibility = ref<boolean>(false);
const toggleMenuVisibility = () => menuVisibility.value = !menuVisibility.value;

const profileVisibility = ref<boolean>(false);
const toggleProfileVisibility = () => profileVisibility.value = !profileVisibility.value
</script>

<template>

    <header class="w-full h-[60px] lg:h-[75px] rounded-md overflow-hidden border border-black">
        <div class="container mx-auto h-full">

            <div class="flex items-center justify-between h-full">
                <h1 class="text-lg font-semibold text-primary-dark-200">{{ routeName }}</h1>

                <nav>
                    <div class="flex lg:hidden gap-2">
                        <ButtonIcon @click="toggleProfileVisibility()" icon="fa-solid fa-user" /> 

                        <ButtonIcon v-if="menuVisibility" @click="toggleMenuVisibility()" icon="fa-solid fa-xmark" :useBackground="true" /> 
                        <ButtonIcon v-else @click="toggleMenuVisibility()" icon="fa-solid fa-border-all" />
                    </div>

                    <MenuMobile class="lg:hidden" :menu="menu" :menuVisibility="menuVisibility" @toggle-menu-visibility="toggleMenuVisibility()"/>
                    <ProfileMobile class="lg:hidden":profileVisibility="profileVisibility" @toggle-profile-visibility="toggleProfileVisibility()" />

                    <ul class="hidden lg:flex items-center justify-center gap-8 h-full border border-black px-4">
                        <li v-for="data in menu" :key="data.id">
                            <router-link :to="{ name: data.name }"
                                class="font-semibold text-base transition-all duration-100 ease-in hover:text-accent-200"
                                active-class="text-primary hover:text-accent-200">
                                {{ data.name }}
                            </router-link>
                        </li>
                    </ul>

                    <!-- <li v-for="data in menu" :key="data.id" class="flex">
                    <router-link @click="$emit('toggleMenuVisibility')" :to="{ name: data.name }" 
                        class="flex gap-3 items-center rounded-sm py-1.5 ps-4 w-1/3 text-base font-medium hover:bg-primary hover:text-primary-light transition-all duration-100 ease-in"
                        active-class="bg-primary text-primary-light hover:bg-accent-200">
                        <fa-icon :icon="data.icon" />
                        {{ data.name }}
                    </router-link>
                </li> -->

                </nav>
            </div>
            

        </div>
    </header>

</template>