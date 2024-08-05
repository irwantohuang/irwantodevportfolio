<script setup lang="ts">
import { RouterView } from 'vue-router';
import Footer from '../components/Layout/Footer.vue';


</script>

<template>
    <main class="main w-full h-full bg-primary-light-200 dark:bg-primary-dark-300 rounded-md overflow-scroll shadow-sm flex flex-col justify-between">
        <RouterView />
        <Footer />
    </main>
</template>