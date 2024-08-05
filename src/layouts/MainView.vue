<script setup lang="ts">
import { RouterView } from 'vue-router';
import Footer from '../components/Layout/Footer.vue';


</script>

<template>
    <main class="main w-full h-full bg-primary-light-200 dark:bg-primary-dark-300 rounded-md overflow-hidden shadow-sm">
        <div class="w-full h-full overflow-y-auto overflow-x-hidden rounded-md scrollbar flex flex-col justify-between">
            <RouterView />
            <Footer />
        </div>
    </main>
</template>