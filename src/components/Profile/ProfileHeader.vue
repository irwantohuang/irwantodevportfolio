<script setup lang="ts">
defineProps({
    image: String,
    name: String,
    headline: String
})

</script>

<template>
    <header class="flex flex-col items-center justify-center">
        <div
            class="w-[150px] h-[150px] overflow-hidden rounded-full">
            <img :src="image" :alt="name" class="w-full h-full object-cover">
        </div>

        <div class="mt-2 text-center">
            <h1 class="font-semibold text-lg md:text-2xl lg:text-lg text-primary/75 dark:text-accent">{{ name }}</h1>
            <p class="mt-2 text-sm md:text-xs font-semibold text-primary-dark-200/50 dark:text-primary-light-200">{{ headline }}</p>
        </div>
    </header>
</template>