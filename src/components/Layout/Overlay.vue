<script setup lang="ts">
defineProps({
    active: Boolean
})

defineEmits([
    'toggleMenuVisibility'
])
</script>

<template>
    <Teleport to="body">
        <div v-show="active" @click="$emit('toggleMenuVisibility')" class="fixed inset-0 w-full h-screen overflow-hidden bg-primary-dark/50 z-[999]"></div>
    </Teleport>
</template>