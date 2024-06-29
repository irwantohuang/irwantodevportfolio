<script setup lang="ts">
import Icon from '../../ui/common/Icon.vue';

defineProps({
    socialMedia: Object
})

const redirectTo = (url?: string) => window.open(url, '_blank');

</script>

<template>
    <section id="social-media" class="absolute inset-x-0 bottom-4">
        <div class="flex flex-row items-center gap-4 md:gap-2 justify-center">
            <Icon v-for="media in socialMedia" @click="redirectTo(media.url)" class="w-[50px] h-[50px] icon-primary icon-default text-3xl" :icon="media.icon" />
        </div>
    </section>
</template>