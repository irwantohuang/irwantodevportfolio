<script setup lang="ts">
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
defineProps({
    detail: Object
})
const modules = [Autoplay, Pagination, Navigation];
</script>

<template>
    <swiper :spaceBetween="30" :centeredSlides="true" :navigation="true" :modules="modules" class="mySwiper" 
    :autoplay="{ delay: 4000, disableOnInteraction: false }" 
    :pagination="{ clickable: true }">
        <template v-for="img in detail">
            <swiper-slide>
                <img :src="img" alt="" class="object-cover h-full w-full object-top" />
            </swiper-slide>
        </template>
    </swiper>
</template>