<script setup lang="ts">
defineProps({
    icon: String,
    link: String,
})
</script>

<template>


    <a :href="link" target="_blank" class="text-primary cursor-pointer transition-all duration-50 ease-in hover:text-primary-light hover:bg-primary-200 flex items-center justify-center rounded-md shadow-inset">
        <fa-icon :icon="icon" />
    </a>

</template>