<script setup lang="ts">
import { computed } from 'vue';
import { store } from '../store/store';


const d = computed(() => store.state.data.data.age)

const addAge = () => {
    store.dispatch('data/increaseAge',)
}

</script>

<template>
    <h1>Home Page</h1>


    <p>{{ d }}</p>
    <button @click="addAge()">tes</button>
</template>