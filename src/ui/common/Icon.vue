<script setup lang="ts">
defineProps({
    icon: String,
    type: String,
    styles: String,
})

</script>

<template>
    <button 
        :class="['relative group cursor-pointer flex items-center justify-center transition-all duration-150 ease-in-out rounded-md', styles]"
    >
        <i v-if="type === 'devIcon'" :class="icon"></i>
        <fa-icon v-else :icon="icon" />
    </button>
</template>