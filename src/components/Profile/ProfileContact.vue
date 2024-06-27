<script setup lang="ts">
import Icon from '../../ui/common/Icon.vue';

defineProps({
    contact: Object
})
</script>

<template>
    <section id="contact" class="flex flex-col gap-6">
        <div v-for="data in contact" class="flex items-center h-auto gap-4 lg:gap-1.5">
            <Icon class="min-w-[45px] min-h-[45px] md:min-w-[50px] md:min-h-[50px] lg:min-w-[40px] lg:min-h-[40px] lg:text-xl md:text-2xl text-xl" :icon="data.icon" />

            <div class="flex flex-col h-full justify-between">
                <h3 class="text-xs md:text-sm lg:text-xs font-bold text-primary-dark-200/50 uppercase">{{ data.title }}</h3>
                <a href="#"
                    class="text-sm md:text-base lg:text-[11px] text-link overflow-hidden text-ellipsis">{{ data.url }}</a>
            </div>
        </div>
    </section>
</template>