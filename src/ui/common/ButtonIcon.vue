<script setup lang="ts">
    defineProps({
        icon: String,
        useBackground: Boolean
    })
</script>

<template>
    <button
        class="flex items-center justify-center text-2xl w-[35px] h-[35px] rounded-md transition-all duration-100 ease-in   outline-none"
        :class="useBackground ? 'bg-primary text-primary-light hover:bg-accent-200 active:bg-accent' : 'text-primary hover:bg-primary hover:text-primary-light active:bg-accent-200'">
        <fa-icon :icon="icon" />
    </button>
</template>