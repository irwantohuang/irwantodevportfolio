<script setup lang="ts">
    defineProps({
        icon: String,
        useBackground: Boolean
    })
</script>

<template>
    <button
        aria-label="toggle"
        class="flex items-center justify-center text-2xl w-[35px] h-[35px] rounded-md transition-all duration-100 ease-in   outline-none"
        :class="useBackground ? 'bg-primary text-primary-light hover:bg-accent-200 dark:bg-accent dark:hover:bg-primary-200' : 'text-primary hover:bg-primary hover:text-primary-light active:bg-accent-200 dark:text-accent dark:hover:bg-accent dark:hover:text-primary-light'">
        <fa-icon :icon="icon" />
    </button>
</template>