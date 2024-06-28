<script setup lang="ts">
defineProps({
    outline: Boolean,
    name: String,
    link: String,
    icon: String,
    order: Boolean,
})
</script>

<template>
    <a class="btn flex items-center justify-center gap-2 px-2 py-1 w-full text-base font-medium rounded-sm"
    :class="outline ? 
        'border border-primary text-primary hover:bg-primary/50 hover:text-primary-dark dark:border-accent dark:text-primary-light dark:hover:bg-accent/50' :   
        'bg-primary text-primary-light hover:bg-accent-200 dark:bg-accent dark:text-primary-dark dark:hover:bg-primary dark:hover:text-primary-light' "
    :href="link" target="_blank">
        <span :class="order ? 'order-2' : 'order-1'">{{ name }}</span>
        <fa-icon :class="order ? 'order-1' : 'order-2'" :icon="icon" />
    </a>
</template>