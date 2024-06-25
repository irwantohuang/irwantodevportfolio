<script setup lang="ts">
import { Menu } from '../../types/Menu';

defineProps({
    menuVisibility: Boolean,
    menu: Object as () => Menu[]
})
</script>

<template>
    <Teleport to="body">
        <Transition name="slide-up">
            <ul v-show="menuVisibility" 
                class="z-[999] fixed inset-x-0 bottom-0 w-full h-[50%] flex flex-col gap-4 px-4 py-6 bg-primary-light-200 shadow-2xl">

                <template v-for="data in menu" :key="data.id">
                    <router-link :to="data.name" class="bg-red-200 text-primary">
                        {{ data.name }}
                    </router-link>
                </template>
                
            </ul>
            <!-- {{ menuVisibility }} -->
        </Transition>
    </Teleport>
</template>