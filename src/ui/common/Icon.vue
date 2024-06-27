<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps({
    icon: String,
    link: String,
    type: String,
})

onMounted(() => console.log('icon type ', props.type))
</script>

<template>

    <a :href="link" target="_blank" class="text-primary cursor-pointer transition-all duration-50 ease-in hover:text-primary-light hover:bg-primary-200 flex items-center justify-center rounded-md shadow-inset">
        <i v-if="type === 'devIcon'" :class="icon"></i>
        <fa-icon v-else :icon="icon" />
    </a>

</template>