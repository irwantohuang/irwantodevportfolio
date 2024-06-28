<script setup lang="ts">
defineProps({
    tools: Object
})
</script>

<template>
    <div class="flex flex-col">
        <template v-for="tool in tools">
            <div class="flex flex-col mb-2">
                <h3 class="uppercase text-base font-semibold text-accent-200 dark:text-accent/95">
                    • {{ tool.title }}
                </h3>
                <div class="flex flex-wrap gap-1 ps-3.5">
                    <p class="text-sm font-medium text-primary-dark/50 dark:text-primary-light-300">{{ tool.tecnology.join(', ') }}</p>
                </div>
            </div>
        </template>
    </div>
</template>