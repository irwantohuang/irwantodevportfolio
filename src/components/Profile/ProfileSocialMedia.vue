<script setup lang="ts">
import Icon from '../../ui/common/Icon.vue';

defineProps({
    socialMedia: Object
})
</script>

<template>
    <section id="social-media" class="absolute inset-x-0 bottom-4">
        <div class="flex flex-row items-center gap-4 md:gap-6 justify-center">
            <Icon class="w-[50px] h-[50px] text-3xl md:w-[55px] md:h-[55px] md:text-4xl lg:w-[40px] lg:h-[40px] lg:text-2xl dark:bg-primary-dark-400"
                v-for="data in socialMedia" :icon="data.icon" :link="data.url" />
        </div>
    </section>
</template>