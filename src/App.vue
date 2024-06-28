<script setup lang="ts">
import { onMounted } from 'vue';
import MainLayout from './layouts/MainLayout.vue';

onMounted(() => {
    const userApperance = window.matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.appearance = userApperance ? 'dark' : 'light'
})
</script>

<template>
    <MainLayout />
</template>
