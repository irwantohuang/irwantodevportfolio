<script setup lang="ts">
import { ref } from 'vue';
import PortfolioCategory from '../components/Portfolio/PortfolioCategory.vue'
import PortfolioDetail from '../components/Portfolio/PortfolioDetail.vue'
import HorizontalLine from '../ui/common/HorizontalLine.vue';
import { portfolio } from '../data/portfolio'
import { router } from '../router/router';
import { Portfolio } from '../types/Portfolio';
import PortfolioSkeleton from '../components/Skeleton/PortfolioSkeleton.vue'



const portfolioDetail = ref();

const showDetailModal = ref(false);
const toggleDetailModal = (id: string, type: string) => {
    if (type === 'open') router.push({ name: 'PortfolioDetail', params: {id} })
    else router.push({ name: 'Portfolio' })
    showDetailModal.value = !showDetailModal.value;
    const main = document.querySelector('.main') as HTMLElement
    main.style.overflow = type === 'open' ? 'hidden' : 'scroll'
    portfolioDetail.value = portfolio.find(e => e.id === id);
}


// Show by Category
const portfolioCategories = ref(['All', 'Web Development', 'Cloning', 'UI Components'])
const activeCategory = ref("All");
const loader = ref(false);
const changeCategory = (e: string) => {
    loader.value = true
    activeCategory.value = e;
    setTimeout(() => { loader.value = false }, 700);
}

const getActiveCategory = (): Portfolio[] => {
    if (activeCategory.value === 'All') return portfolio;
    else return portfolio.filter(v => v.category.includes(activeCategory.value));
}



</script>

<template>
    <div class="portfolio container mx-auto py-[25px] w-full h-full">
        <PortfolioCategory :category="portfolioCategories" :activeCategory="activeCategory" @change-category="changeCategory" />

        <HorizontalLine class="my-4" />

        <PortfolioSkeleton v-if="loader"/>
        <div v-else class="grid gap-x-4 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="porto in getActiveCategory()" :key="porto.id" @click="toggleDetailModal(porto.id, 'open')" class="card flex flex-col gap-2 transition-all duration-100 ease-in-out group hover:-translate-y-1 cursor-pointer">
                <div class="rounded-md aspect-video transition-all duration-100 ease-in-out overflow-hidden group-hover:shadow-md">
                    <img :src="porto.cover" :alt="porto.title" class="w-full h-full object-cover object-top">
                </div>

                <h3 class="px-2 font-medium text-base text-primary group-hover:text-accent-200">{{ porto.title }}</h3>
            </div>
        </div>
    </div>

    <Transition name="slide-up">
        <PortfolioDetail v-show="showDetailModal" :portfolioDetail="portfolioDetail" :showDetailModal="showDetailModal" @toggle-detail-modal="toggleDetailModal" />
    </Transition>

</template>