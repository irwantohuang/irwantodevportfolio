<script setup lang="ts">
defineProps({
    icon: String,
    type: String,
    styles: String,
})

</script>

<template>
    <button :class="styles" class="cursor-pointer flex items-center justify-center transition-all duration-150 ease-in-out rounded-md">
        <i v-if="type === 'devIcon'" :class="icon"></i>
        <fa-icon v-else :icon="icon" />
    </button>
</template>