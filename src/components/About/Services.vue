<script setup lang="ts">
import Icon from '../../ui/common/Icon.vue';
import { services } from '../../data/services'
</script>
<template>

    <div class="mt-8">
        <h3 class="text-title text-2xl font-semibold text-primary">What I Do</h3>


        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">

            <template v-for="service in services" :key="service.id">
                <div class="bg-primary-light border border-black rounded-md flex items-start p-4 gap-6">
                    <Icon class="min-w-[50px] min-h-[50px] text-2xl" :icon="service.icon" />

                    <div class="flex flex-col">
                        <h3 class="font-bold text-lg md:text-base lg:text-lg text-primary uppercase">{{ service.title }}</h3>
                        <p class="font-medium text-sm md:text-xs lg:text-sm text-justify text-primary-dark-200/75">{{ service.description }}</p>
                    </div>
                </div>
            </template>

        </div>

    </div>

</template>