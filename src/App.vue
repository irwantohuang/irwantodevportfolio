<script setup lang="ts">
import MainView from './layouts/MainView.vue';
</script>

<template>
    <router-link :to="{name: 'Home'}">Home</router-link>
    <router-link :to="{name: 'About'}">About</router-link>

  <MainView />
</template>

<style scoped>
</style>
