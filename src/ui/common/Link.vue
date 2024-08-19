<script setup lang="ts">
defineProps({
    url: String,
    type: String,
})

</script>

<template>

    <a :href="url" target="_blank"
        class="btn cursor-pointer flex items-center justify-center gap-2 px-2 py-1 w-full text-base font-medium"
        >
        <slot></slot>
    </a>
</template>