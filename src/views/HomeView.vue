<script setup lang="ts">
import Experiences from '../components/Home/Experiences.vue';
import Services from '../components/Home/Services.vue'
import HorizontalLine from '../ui/common/HorizontalLine.vue';
import TextSkeleton from '../components/Skeleton/TextSkeleton.vue'
import { computed } from 'vue';
import { store } from '../store/store';


const globalLoader = computed(() => store.state.loader.loader)
</script>

<template>
    <div class="container mx-auto py-[25px] w-full h-full">
        <TextSkeleton v-if="globalLoader"/>
        <template v-else>
            <p class="text-sm md:text-base lg:text-lg text-justify">Hi! I'm 
                <a href="#" class="text-link">Irwanto Huang</a>
                , a Frontend Web Developer from Jakarta, Indonesia. With a keen eye for design and strong coding skills, I specialize in creating beautiful, responsive, and user-friendly website. I am proficient in HTML, CSS, Javascript, Typescript, Vue.js, TailwindCSS, and have experience with backend technologies such as Java and Spring Boot.</p>
        </template>


        <HorizontalLine />
        <Services :globalLoader="globalLoader"/>

        <HorizontalLine />
        <Experiences :globalLoader="globalLoader" />
    </div>
</template>