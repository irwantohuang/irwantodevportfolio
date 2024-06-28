<script setup lang="ts">
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { ref, watch } from 'vue';
const props = defineProps({
    detail: Object
})
const modules = [Autoplay, Pagination, Navigation];

const swiperRef = ref(null);

watch(() => props.detail, (newVal) => {
    if (newVal) {
        console.log("hello world", newVal);
        console.log(swiperRef.value)
        
    }
})

</script>

<template>
    <swiper ref="swiperRef" :initialSlide="0" :spaceBetween="30" :centeredSlides="true" :navigation="true" :modules="modules" class="mySwiper" 
    :autoplay="{ delay: 2500, disableOnInteraction: false }" 
    :pagination="{ clickable: true }" :lazy="true">
        <template v-for="img in detail">
            <swiper-slide :lazy="true">
                <img :src="img" alt="Irwanto Huang Portfolio" class="object-cover h-full w-full object-top" />
                <div class="swiper-lazy-preloader"></div>
            </swiper-slide>
        </template>
    </swiper>
</template>