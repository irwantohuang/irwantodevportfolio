<script setup lang="ts">
const date = new Date();
const year = date.getFullYear(); 
</script>

<template>
    <div class="py-4">
        <p class="text-center text-sm text-primary-dark/65 dark:text-primary-light/75">&copy; {{ year }} Irwanto. Created using Vue.js and TailwindCSS</p>
    </div>
</template>