<script setup lang="ts">
import { ref } from 'vue';
import PortfolioCategory from '../components/Portfolio/PortfolioCategory.vue'
import PortfolioDetail from '../components/Portfolio/PortfolioDetail.vue'
import HorizontalLine from '../ui/common/HorizontalLine.vue';
import { portfolio } from '../data/portfolio'
import { router } from '../router/router';

const portfolioCategories = ref(['All', 'Web Development', 'Cloning', 'UI Components'])
const activeCategory = ref("All");
const changeCategory = (e: string) => activeCategory.value = e;

const portfolioDetail = ref();

const showDetailModal = ref(false);
const toggleDetailModal = (id: string, type: string) => {
    if (type === 'open') router.push({ name: 'PortfolioDetail', params: {id} })
    else router.push({ name: 'Portfolio' })
    // document.body.style.overflow = result ? 'hidden' : 'auto'
    showDetailModal.value = !showDetailModal.value;

    document.body.style.overflow = type === 'open' ? 'hidden' : 'scroll'
    const main = document.querySelector('.main') as HTMLElement
    console.log('ini main ini', main)
    main.style.overflow = type === 'open' ? 'hidden' : 'scroll'
    console.log('ini main ini udah', main.style.overflow)

    portfolioDetail.value = portfolio.find(e => e.id === id);
}

</script>

<template>
    <div class="portfolio container mx-auto py-[25px] w-full h-full">
        <PortfolioCategory :category="portfolioCategories" :activeCategory="activeCategory" @change-category="changeCategory" />

        <HorizontalLine class="my-4" />

        <div class="grid gap-x-4 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="porto in portfolio" :key="porto.id" @click="toggleDetailModal(porto.id, 'open')" class="card flex flex-col gap-2 transition-all duration-100 ease-in-out group hover:-translate-y-1 cursor-pointer">
                <div class="rounded-md aspect-video transition-all duration-100 ease-in-out overflow-hidden group-hover:shadow-md">
                    <img :src="porto.cover" :alt="porto.title" class="w-full h-full object-cover object-top">
                </div>

                <h3 class="px-2 font-medium text-base text-primary group-hover:text-accent-200">{{ porto.title }}</h3>
            </div>
        </div>


        <!-- Porto Detail -->
        <!-- <Teleport to="portfolio"> -->
            <!-- <Transition name="slide-up">
                <div v-show="showDetail" class="px-2 h-full w-full absolute inset-x-0 bottom-0 bg-primary-light-300/90">
                    <div class="container mx-auto py-[25px]">
                        <div class="absolute top-2 right-2">
                            <ButtonIcon @click="closeDetail()" icon="fa-solid fa-xmark" /> 
                        </div>
                    </div>
                </div>
            </Transition> -->
        <!-- </Teleport> -->

    </div>

    <PortfolioDetail :portfolioDetail="portfolioDetail" :showDetailModal="showDetailModal" @toggle-detail-modal="toggleDetailModal" />


</template>