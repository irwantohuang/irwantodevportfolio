<script setup lang="ts">
import { ref } from 'vue';
import { skills } from '../data/skills' 
import HorizontalLine from '../ui/common/HorizontalLine.vue';
import SkillSkeleton from '../components/Skeleton/SkillSkeleton.vue'
import SectionCategory from '../components/Skill/SectionCategory.vue'
import Icon from '../ui/common/Icon.vue';
import { Skills } from '../types/Skills';


const category = ref(
    ['all', 'language', 'framework', 'database', 'concepts', 'soft skill']
)
const activeCategory = ref('all');
const loader = ref(false);
const changeActive = (e: string) => {
    loader.value = true;
    activeCategory.value = e

    setTimeout(() => {
        loader.value = false
    }, 1000);

};

const checkType = (e: string) => {
    if (e === 'concepts' || e === 'soft skill') return ''
    else return 'devIcon'
}

const showSkill = (): Skills[] => {
    if (activeCategory.value === 'all') {
        return skills;
    } else {
        return skills.filter(e => e.group === activeCategory.value)
    }
}

</script>

<template>
    <div class="container mx-auto py-[25px] w-full h-full">
        <SectionCategory :activeCategory="activeCategory" :category="category" @change-active="changeActive" />
        <!-- <div class="flex items-center flex-wrap gap-2">
            <button v-for="data in category" @click="changeActive(data)" class="btn px-6 py-0.5 text-xs md:text-sm rounded-full bg-primary text-primary-light capitalize " :class="activeCategory === data ? 'bg-accent-200 hover:bg-accent-200/95'  : 'hover:bg-accent-200/90'">
                {{ data }}
            </button>
        </div> -->

        <HorizontalLine class="my-4" />

        <SkillSkeleton v-if="loader"/>
        <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
            <div v-for="skill in showSkill()" :key="skill?.id" class="card flex gap-3 items-start">
                <Icon class="min-w-[50px] min-h-[50px] text-3xl" :icon="skill?.icon" :type="checkType(skill?.group)"/>
                <div class="flex flex-col gap-1">
                    <h3 class="font-semibold text-primary text-sm md:text-base">{{ skill?.name }}</h3>
                    <p class="font-medium text-primary-dark-200/50 text-xs md:text-sm">{{ skill?.level }}</p>
                </div>
            </div>
        </div>
    </div>
</template>