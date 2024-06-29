<script setup lang="ts">
import { Skills } from '../../types/Skills';
import Icon from '../../ui/common/Icon.vue';

defineProps({
    skill: Object as () => Skills,
    iconType: String
})
</script>

<template>
    <div class="card flex gap-3 items-start group hover:scale-[103%] transition-all duration-150 ease-in">
        <Icon class="icon-default icon-default-size icon-primary text-3xl" :icon="skill?.icon" :type="iconType"/>

        <div class="flex flex-col gap-1">
            <h2 class="font-semibold text-accent-200 dark:text-accent group-hover:text-primary text-sm md:text-base">{{ skill?.name }}</h2>
            <p class="font-medium text-primary-dark-200/90 dark:text-primary-light-200/75 group-hover:text-primary-dark dark:group-hover:text-primary-light-200 text-xs md:text-sm">{{ skill?.level }}</p>
        </div>
    </div>
</template>