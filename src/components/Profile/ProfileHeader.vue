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
            class="w-[150px] h-[150px] overflow-hidden rounded-md">
            <img :src="image" :alt="name" class="w-full h-full object-cover">
        </div>

        <div class="mt-2 text-center">
            <h1 class="font-bold text-lg md:text-2xl lg:text-lg text-primary/75">{{ name }}</h1>
            <p class="text-[10px] md:text-xs font-bold text-primary-dark-200/50">{{ headline }}</p>
        </div>
    </header>
</template>