<script setup lang="ts">
import { Menu } from '../../types/Menu';

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
                class="z-[999] fixed inset-x-0 bottom-0 w-full h-[50%] flex flex-col gap-4 px-4 py-6 bg-primary-light-200 shadow-2xl">
                <li v-for="data in menu" :key="data.id" class="flex">
                    <router-link @click="$emit('toggleMenuVisibility')" :to="{ name: data.name }" 
                        class="flex gap-3 items-center rounded-sm py-1.5 ps-4 w-1/2 text-base font-medium hover:bg-primary hover:text-primary-light transition-all duration-100 ease-in"
                        active-class="bg-primary text-primary-light hover:bg-accent-200">
                        <fa-icon :icon="data.icon" />
                        {{ data.name }}
                    </router-link>
                </li>
            </ul>
        </Transition>
    </Teleport>
</template>