<script setup lang="ts">
import { Skills } from '../../types/Skills';
import Icon from '../../ui/common/Icon.vue';

defineProps({
    skill: Object as () => Skills,
    iconType: String
})
</script>

<template>
    <div class="card flex gap-3 items-start group">
        <Icon class="min-w-[50px] min-h-[50px] text-3xl" :icon="skill?.icon" :type="iconType" />
        <div class="flex flex-col gap-1">
            <h2 class="font-semibold text-accent-200 text-sm md:text-base">{{ skill?.name }}</h2>
            <p class="font-medium text-primary-dark-200/90 text-xs md:text-sm">{{ skill?.level }}</p>
        </div>
    </div>
</template>