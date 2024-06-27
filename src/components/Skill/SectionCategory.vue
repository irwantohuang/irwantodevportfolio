<script setup lang="ts">
defineProps({
    category: Array,
    activeCategory: String,
})

defineEmits([
    'changeActive'
])
</script>

<template>
    <div class="flex items-center flex-wrap gap-2">
        <button v-for="data in category" @click="$emit('changeActive', data)"
            class="btn px-6 py-0.5 text-xs md:text-sm rounded-full bg-primary text-primary-light capitalize "
            :class="activeCategory === data ? 'bg-accent-200 hover:bg-accent-200/95' : 'hover:bg-accent-200/90'">
            {{ data }}
        </button>
    </div>
</template>