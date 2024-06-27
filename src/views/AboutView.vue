<script setup lang="ts">
import Experiences from '../components/About/Experiences.vue';
import Services from '../components/About/Services.vue'
import HorizontalLine from '../ui/common/HorizontalLine.vue';
</script>

<template>
    <div class="container mx-auto py-[25px] w-full h-full">

        <div class="">
            <p class="text-sm md:text-base lg:text-lg text-justify">Hi! I'm 
                <a href="" class="text-link">Irwanto Huang</a>
                , a Frontend Web Developer from Jakarta, Indonesia. With a keen eye for design and strong coding skills, I specialize in creating beautiful, responsive, and user-friendly website. I am proficient in HTML, CSS, Javascript, Typescript, Vue.js, TailwindCSS, and have experience with backend technologies such as Java and Spring Boot.</p>
        </div>

        <HorizontalLine />
        <Services />
        <HorizontalLine />
        <Experiences />
    </div>
</template>