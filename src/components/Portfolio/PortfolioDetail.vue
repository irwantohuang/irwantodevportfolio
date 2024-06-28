<script setup lang="ts">
import { Portfolio } from '../../types/Portfolio';
import ButtonIcon from '../../ui/common/ButtonIcon.vue';
import HorizontalLine from '../../ui/common/HorizontalLine.vue';
import PortfolioLink from './PortfolioLink.vue'
import PortfolioTech from './PortfolioTech.vue'
import SwiperImage from '../Swiper/SwiperImage.vue'

defineProps({
    showDetailModal: Boolean,
    portfolioDetail: Object as () => Portfolio
})

defineEmits([
    'toggleDetailModal'
])
</script>

<template>

    <Transition name="slide-up">
        <div v-show="showDetailModal" class="rounded-md h-full w-full absolute inset-x-0 bottom-0 shadow-md bg-primary-light-200">
            <div class="container mx-auto py-[25px] h-full overflow-scroll">
                <div class="absolute -top-3.5 -right-3 z-[99]">
                    <ButtonIcon @click="$emit('toggleDetailModal', null, 'close')" :useBackground="true" icon="fa-solid fa-xmark" />
                </div>

                <div class="flex flex-col lg:flex-row gap-4 overflow-scroll">
                    <div class="w-full h-full md:w-full lg:w-2/3 rounded-md overflow-hidden">
                        <SwiperImage :detail="portfolioDetail?.detail.image" />
                    </div>

                    <div class="flex justify-between items-start lg:hidden">
                        <h3 class="text-xl font-medium text-primary">{{ portfolioDetail?.title }}</h3>
                        <PortfolioLink :livePreview="portfolioDetail?.detail.livePreview" :github="portfolioDetail?.detail.githubLink" type="mobile"/>
                    </div>

                    <div class="hidden lg:flex lg:flex-col">
                        <h3 class="text-xl font-medium text-primary">{{ portfolioDetail?.title }}</h3>
                        <HorizontalLine class="mt-2 mb-4" />
                        <PortfolioTech :tools="portfolioDetail?.detail.technology" />
                        <PortfolioLink :livePreview="portfolioDetail?.detail.livePreview" :github="portfolioDetail?.detail.githubLink" type="desktop"/>
                    </div>
                </div>

                <div class="w-full mt-4 flex flex-col">
                    <p class=" text-base font-normal text-primary-dark text-justify">{{ portfolioDetail?.detail.description }}</p>
                    <PortfolioTech :tools="portfolioDetail?.detail.technology" class="mt-4 lg:hidden"/>
                </div>
            </div>
        </div>
    </Transition>
</template>