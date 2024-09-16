<script setup lang="ts">
import { computed, ref } from 'vue';
import PortfolioCategory from '../components/Portfolio/PortfolioCategory.vue'
import HorizontalLine from '../ui/common/HorizontalLine.vue';
import { portfolios } from '../data/portfolio'
import { Portfolio } from '../types/Portfolio';
import PortfolioSkeleton from '../components/Skeleton/PortfolioSkeleton.vue'
import { store } from '../store/store';
import CategorySkeleton from '../components/Skeleton/CategorySkeleton.vue';


const globalLoader = computed(() => store.state.loader.loader);

// Show by Category
const portfolioCategories = ref(['All', 'Web Development', 'Cloning'])
const activeCategory = ref("All");
const loader = ref(false);
const changeCategory = (e: string) => {
    loader.value = true
    activeCategory.value = e;
    setTimeout(() => { loader.value = false }, 700);
}

const getActiveCategory = (): Portfolio[] => {
    if (activeCategory.value === 'All') return portfolios;
    else return portfolios.filter(v => v.category.includes(activeCategory.value));
}

const onHoverContainer = ref<boolean[]>([]);
const isAlreadyHover = ref<boolean[]>([]);

const handleMouse = (isHovering: boolean, index: number) => {
    onHoverContainer.value[index] = isHovering;
    if (isHovering) {
        isAlreadyHover.value[index] = isHovering;
    }
}
</script>

<template>
    <div class="portfolio container mx-auto py-[25px] w-full h-full">
        <CategorySkeleton v-if="globalLoader" />
        <PortfolioCategory v-else :category="portfolioCategories" :activeCategory="activeCategory"
            @change-category="changeCategory" />

        <HorizontalLine class="my-4" />

        <PortfolioSkeleton v-if="loader || globalLoader" />

        <div v-else class="flex flex-col gap-6">
            <template v-for="(porto, index) in getActiveCategory()" :key="porto.id">
                <div 
                class="flex items-start flex-col xl:flex-row gap-x-4 gap-y-2 w-full p-2 transition-all group hover:shadow-md rounded border-primary" 
                >
                <div 
                    class="aspect-video w-full xl:max-w-[600px] flex-shrink-0 relative overflow-hidden transition-all duration-300 rounded" 
                    @mouseenter="handleMouse(true, index)"
                    @mouseleave="handleMouse(false, index)"
                >
                    <img :src="porto.thumbnailUrl" alt="" class="w-full object-cover">
                    <iframe 
                        :src="onHoverContainer[index] ? `${porto.videoUrl}?autoplay=1&mute=1&fs=1` : `${porto.videoUrl}`" 
                        class="absolute w-full h-full aspect-video object-cover inset-0 z-2 transition-all duration-200"
                        :class="onHoverContainer[index] ? 'opacity-100' : 'opacity-0'"
                        muted playsinline loop allowfullscreen>
                    </iframe>

                    <div 
                        class="absolute inset-0 z-1 flex items-center justify-center bg-primary-dark-250 bg-opacity-50 transition-opacity duration-300"
                        :class="isAlreadyHover[index] ? 'opacity-0 pointer-events-none' : ''"
                    >
                        <span class="text-primary-light opacity-50 text-xl font-medium">Hover me</span>
                        <div class="absolute rounded-full border-4 border-white w-16 h-16 animate-ping"></div>
                        <div class="absolute rounded-full border-2 border-white w-28 h-28 animate-ping"></div>
                    </div>
                </div>
                <div class="flex-shrink flex w-full h-full justify-between items-center flex-col">
                    <div>
                        <p class="text-2xl font-semibold text-primary-dark-400 group-hover:text-primary dark:text-accent dark:group-hover:text-primary-200">{{ porto.title }}</p>
                        <p class="text-sm line-clamp-[8] text-justify font-normal text-primary-dark-200 dark:text-primary-light-200 dark:group-hover:text-primary-light group-hover:text-primary-dark mt-2">{{ porto.portfolioDetail.description }}</p>
                        <div class="flex whitespace-nowrap flex-wrap gap-x-2 gap-y-1 mt-2">
                            <p v-for="tech in porto.portfolioDetail.techStack" :key="tech" class="text-xs px-2.5 py-0.5 rounded bg-primary-dark-200 dark:bg-primary-light-300 dark:text-primary-dark-400 text-primary-light-200">
                                {{ tech }}
                            </p>
                        </div>
                    </div>
                    <div class="flex w-full whitespace-nowrap flex-wrap gap-x-2 gap-y-1 justify-between mt-4">
                        <a class="text-center flex-1 bg-primary dark:bg-accent dark:hover:bg-primary py-1 flex items-center justify-center text-base font-medium text-primary-light transition-all duration-300 hover:bg-primary-200 rounded" :href="porto.portfolioDetail.liveUrl" target="_blank">Live Preview</a>
                        <a class="text-center flex-1 border-2 border-primary dark:border-accent dark:hover:bg-primary flex items-center justify-center py-1 text-base font-medium text-primary-black transition-all duration-300 hover:bg-primary-200 rounded" :href="porto.portfolioDetail.githubUrl" target="_blank">Github Repository</a>
                    </div>
                </div>
            </div>

            <div className="container max-w-screen-sm mx-auto h-[1px] my-4 xl:hidden rounded-full bg-gradient-to-r from-primary via-purple-500 to-accent"></div>
            </template>
        </div>
    </div>
</template>