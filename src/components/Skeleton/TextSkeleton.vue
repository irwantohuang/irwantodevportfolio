<script setup lang="ts">
defineProps({
    title: Boolean,
    text: Boolean
})
</script>

<template>
    <div class="animate-pulse flex flex-wrap items-center justify-between gap-1 mb-4">
        <div v-if="title || text" :class="text ? 'h-2' : 'h-4'" class="bg-primary-light-300 w-2/3 rounded-xl"></div>

        <template v-else>
            <div v-for="n in 8" :key="n" class="bg-primary-light-300 h-2 w-[11.5%] rounded-full"></div>
            <div v-for="n in 4" :key="n" class="bg-primary-light-300 h-2 w-[24%] rounded-full"></div>
            <div v-for="n in 6" :key="n" class="bg-primary-light-300 h-2 w-[15.5%] rounded-full"></div>
            <div class="bg-primary-light-300 h-2 w-1/3 rounded-full"></div>
        </template>
    </div>
</template>