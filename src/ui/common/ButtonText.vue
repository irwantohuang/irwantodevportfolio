<script setup lang="ts">
defineProps({
    outline: Boolean,
    name: String,
    link: String,
    icon: String,
})
</script>

<template>
    <button class="btn flex items-center justify-between gap-2 px-2 py-1.5 w-full text-base font-medium rounded-sm"
    :class="outline ? 'border border-primary text-primary hover:bg-primary/50 hover:text-primary-dark' 
        : 'bg-primary text-primary-light hover:bg-accent-200'">
        <a :href="link" target="_blank">
            {{ name }}
            <fa-icon :icon="icon" />
        </a>
    </button>
</template>