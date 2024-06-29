<script setup lang="ts">
defineProps({
    icon: String,
    type: String,
    styles: String,
})

</script>

<template>
    <button :class="styles" class="cursor-pointer flex items-center justify-center transition-all duration-150 ease-in-out rounded-md">
        <i v-if="type === 'devIcon'" :class="icon"></i>
        <fa-icon v-else :icon="icon" />
    </button>
</template>


<style>

    .icon-non-bg {
        @apply text-primary hover:bg-primary hover:text-primary-light
                dark:text-accent dark:hover:bg-accent dark:hover:text-primary-light
    }

    .icon-bg {
        @apply bg-primary text-primary-light hover:bg-accent-200 
                dark:bg-accent dark:hover:bg-primary-200
    }

    .icon-primary {
        @apply dark:bg-primary-dark-400  dark:group-hover:bg-primary dark:hover:bg-primary
    }

    .icon-secondary {
        @apply dark:bg-primary-dark-300 dark:group-hover:bg-accent
    }

    .icon-default {
        @apply  bg-primary-light-300/50 text-primary hover:bg-primary hover:text-primary-light
        group-hover:bg-primary group-hover:text-primary-light 
        dark:text-primary-light-200 
    }

    .icon-default-size {
        @apply min-w-[50px] min-h-[50px]
    }

</style>