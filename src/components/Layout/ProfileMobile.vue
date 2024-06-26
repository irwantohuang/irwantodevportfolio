<script setup lang="ts">
import ButtonIcon from '../../ui/common/ButtonIcon.vue';
import Icon from '../../ui/common/Icon.vue';
import HorizontalLine from '../../ui/common/HorizontalLine.vue'
import { profile } from '../../data/profile'

defineProps({
    profileVisibility: Boolean
})

defineEmits([
    'toggleProfileVisibility'
])
</script>

<template>
    <Teleport to="body">
        <Transition name="slide-right">
            <div v-show="profileVisibility" class="lg:hidden h-full w-full bg-primary-light z-[999] fixed inset-y-0 left-0">
                <ButtonIcon @click="$emit('toggleProfileVisibility')" :useBackground="true" icon="fa-solid fa-xmark"
                    class="absolute top-4 right-4 rounded-full" />


                <div class="container mx-auto py-[75px] h-full">
                    <div class="h-full flex flex-col items-center">

                        <header>
                            <div
                                class="w-[150px] h-[150px] p-2 bg-primary-light border border-primary-dark-200 rounded-2xl shadow-inner overflow-hidden">
                                <img :src="profile.profilePicture" :alt="profile.name"
                                    class="w-full h-full rounded-2xl object-cover">
                            </div>

                            <div class="mt-2 text-center">
                                <h1 class="font-bold text-lg text-primary/75">{{ profile.name }}</h1>
                                <p class="text-[10px] font-bold text-primary-dark-200/50">{{ profile.headline }}</p>
                            </div>
                        </header>

                        <HorizontalLine />

                        <article class="flex flex-col gap-4 w-full">
                            <section id="contact">
                                <div v-for="data in profile.contact" class="mt-6 flex items-center h-auto gap-4 ">
                                    <Icon class="w-[45px] h-[45px] text-xl" :icon="data.icon" />

                                    <div class="flex flex-col h-full justify-between ">
                                        <h3 class="text-xs font-bold text-primary-dark-200/50 uppercase">{{ data.title }}</h3>
                                        <a href="#" class="text-sm font-medium text-accent transition-all duration-50 hover:text-accent-200">{{ data.url }}</a>
                                    </div>
                                </div>
                            </section>


                            <section id="social-media" class="mt-6">
                                <div class="flex flex-row items-center gap-4 justify-center">
                                    <Icon class="w-[50px] h-[50px] text-3xl" v-for="data in profile.socialMedia" :icon="data.icon" :link="data.url" />
                                </div>
                            </section>
                        </article>

                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>