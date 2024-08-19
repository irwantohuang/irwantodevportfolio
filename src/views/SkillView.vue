<script setup lang="ts">
import { computed, ref } from 'vue';
import { skills } from '../data/skills' 
import HorizontalLine from '../ui/common/HorizontalLine.vue';
import SkillSkeleton from '../components/Skeleton/SkillSkeleton.vue'
import SectionCategory from '../components/Skill/SectionCategory.vue'
import { Skills } from '../types/Skills';
import SkillContent from '../components/Skill/SkillContent.vue';
import { store } from '../store/store';
import CategorySkeleton from '../components/Skeleton/CategorySkeleton.vue'


const category = ref(
    ['all', 'language', 'framework', 'database', 'concepts', 'tools']
)
const activeCategory = ref('all');
const loader = ref(false);
const globalLoader = computed(() => store.state.loader.loader)

const changeActive = (e: string) => {
    loader.value = true;
    activeCategory.value = e
    setTimeout(() => {
        loader.value = false
    }, 700);
};

const checkType = (e: string) => {
    if (e.includes('devicon')) return 'devIcon'
    else return ''
}

const showSkill = (): Skills[] => {
    if (activeCategory.value === 'all') return skills;
    else return skills.filter(v => v.group === activeCategory.value)
}

</script>

<template>
    <div class="container mx-auto py-[25px] w-full h-full">
        <CategorySkeleton v-if="globalLoader" /> 
        <SectionCategory v-else :activeCategory="activeCategory" :category="category" @change-active="changeActive" />

        <HorizontalLine class="my-4" />
        <SkillSkeleton v-if="loader || globalLoader"/>

        <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
            <template v-for="skill in showSkill()" :key="skill.id" >
                <SkillContent :skill="skill" :iconType="checkType(skill.icon)" />
            </template>
        </div>
    </div>
</template>