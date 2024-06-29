<script setup lang="ts">
import PillButton from '../../ui/common/PillButton.vue'
defineProps({
    category: Array as () => string[],
    activeCategory: String,
})

defineEmits([
    'changeCategory'
])
</script>

<template>
    <div class="flex items-center flex-wrap gap-2">
        <PillButton v-for="data in category" @click="$emit('changeCategory', data)" :category="data" :isActive="activeCategory === data" />
    </div>
</template>