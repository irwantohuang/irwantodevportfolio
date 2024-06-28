<script setup lang="ts">
defineProps({
    icon: String,
    link: String,
    type: String,
})
</script>

<template>
    <a :href="link" target="_blank" class="text-primary cursor-pointer transition-all duration-50 ease-in hover:text-primary-light hover:bg-primary-200 group-hover:bg-primary-200 group-hover:text-primary-light-200 flex items-center justify-center rounded-md shadow-inset 
    dark:text-primary-light dark:shadow-none dark:bg-primary dark:hover:bg-accent dark:hover:text-primary-light
    dark:group-hover:text-primary-light">
        <i v-if="type === 'devIcon'" :class="icon"></i>
        <fa-icon v-else :icon="icon" />
    </a>
</template>