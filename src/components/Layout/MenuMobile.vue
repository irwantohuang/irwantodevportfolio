<script setup lang="ts">
import { Menu } from '../../types/Menu';
import Icon from '../../ui/common/Icon.vue';

defineProps({
    menuVisibility: Boolean,
    menu: Object as () => Menu[]
})

defineEmits([
    'toggleMenuVisibility'
])
</script>
<template>
    <Teleport to="body">
        <Transition name="slide-up">

            <ul v-show="menuVisibility" 
                class="lg:hidden z-[1001] fixed inset-x-0 bottom-0 w-full h-[50%] flex flex-col gap-4 px-4 py-6 bg-primary-light-200 shadow-2xl dark:bg-primary-dark-400">

                <Icon @click="$emit('toggleMenuVisibility')" class="icon-default min-h-[35px] min-w-[35px] text-3xl icon-default icon-bg absolute top-3 right-3" icon="fa-solid fa-xmark" />

                <li v-for="data in menu" :key="data.id" class="flex">
                    <router-link @click="$emit('toggleMenuVisibility')" :to="{ name: data.name }" 
                        class="flex gap-3 items-center rounded-sm py-1.5 ps-4 w-1/2 text-base font-medium hover:bg-primary hover:text-primary-light transition-all duration-100 ease-in dark:hover:bg-accent "
                        active-class="bg-primary text-primary-light hover:bg-accent-200 dark:bg-accent dark:hover:text-primary-dark">
                        <fa-icon :icon="data.icon" />
                        {{ data.name }}
                    </router-link>
                </li>
            </ul>
        </Transition>
    </Teleport>
</template>