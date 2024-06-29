<script setup lang="ts">
defineProps({
    url: String,
    type: String,
})

</script>

<template>

    <a :href="url" target="_blank"
        class="btn cursor-pointer flex items-center justify-center gap-2 px-2 py-1 w-full text-base font-medium rounded-sm"
        >
        <slot></slot>
    </a>
</template>


<style>
    .btn-primary {
        @apply bg-primary text-primary-light hover:bg-accent-200
                dark:bg-accent dark:text-primary-dark-400
                dark:hover:bg-primary dark:hover:text-primary-light
    }

    .btn-outline {
        @apply border border-primary hover:bg-primary/25
                dark:border-accent dark:hover:bg-accent/25
    }

</style>