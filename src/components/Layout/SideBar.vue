<script setup lang="ts">
import { profile } from '../../data/profile';
import HorizontalLine from '../../ui/common/HorizontalLine.vue';
import Icon from '../../ui/common/Icon.vue';
</script>
<template>

    <aside class="hidden lg:flex w-1/4 xl:w-1/5 h-full bg-gray-500 rounded-xl overflow-hidden">
        <div class="relative container mx-auto py-[25px] bg-primary-light-200">

            <header class="flex flex-col items-center justify-center">

                <div class="w-[125px] h-[125px] overflow-hidden rounded-md">
                    <img :src="profile.profilePicture" :alt="profile.name" class="w-full h-full object-cover">
                </div>


                <div class="mt-2">
                    <h1 class="font-bold text-lg text-primary/75">{{ profile.name }}</h1>
                    <p class="text-xs font-bold text-primary-dark-200/50">{{ profile.headline }}</p>
                </div>

            </header>


            <HorizontalLine />

            <article class="flex flex-col gap-12 w-full">

                <section id="contact" class="flex flex-col gap-6">
                    <div v-for="data in profile.contact" class="flex items-center h-auto gap-2">
                        <Icon class="min-w-[40px] min-h-[40px] text-xl" :icon="data.icon" />


                        <div class="flex flex-col h-full justify-between ">
                            <h3 class="text-xs font-bold text-primary-dark-200/50 uppercase">{{ data.title }}
                            </h3>
                            <a href="#"
                                class="text-[10px] font-medium text-accent transition-all duration-50 hover:text-accent-200">{{
                        data.url }}</a>
                        </div>
                    </div>
                </section>

                <section id="social-media" class="absolute inset-x-0 bottom-4">
                    <div class="flex flex-row items-center gap-4 md:gap-6 justify-center">
                        <Icon class="w-[40px] h-[40px] text-2xl"
                            v-for="data in profile.socialMedia" :icon="data.icon" :link="data.url" />
                    </div>
                </section>

            </article>

            <!-- <article class="flex flex-col gap-4 w-full">
                <section id="contact">
                    <div v-for="data in profile.contact" class="mt-6 flex items-center h-auto gap-4 ">
                        <Icon class="w-[45px] h-[45px] md:w-[50px] md:h-[50px] md:text-2xl text-xl" :icon="data.icon" />

                        <div class="flex flex-col h-full justify-between ">
                            <h3 class="text-xs md:text-sm font-bold text-primary-dark-200/50 uppercase">{{ data.title }}
                            </h3>
                            <a href="#"
                                class="text-sm md:text-base font-medium text-accent transition-all duration-50 hover:text-accent-200">{{
                        data.url }}</a>
                        </div>
                    </div>
                </section>


                <section id="social-media" class="mt-6">
                    <div class="flex flex-row items-center gap-4 md:gap-6 justify-center">
                        <Icon class="w-[50px] h-[50px] text-3xl md:w-[55px] md:h-[55px] md:text-4xl"
                            v-for="data in profile.socialMedia" :icon="data.icon" :link="data.url" />
                    </div>
                </section>
            </article> -->

        </div>
    </aside>

</template>