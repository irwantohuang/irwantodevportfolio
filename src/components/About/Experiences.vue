<script setup lang="ts">
import { experience } from '../../data/experience'
import TextSkeleton from '../Skeleton/TextSkeleton.vue';

defineProps({
    globalLoader: Boolean
})


</script>

<template>
    <div class="mt-8 py-2">
        <TextSkeleton v-if="globalLoader" :title="true" />
        <h3 v-else class="text-title text-2xl font-semibold text-primary">Experiences</h3>


        <div class="mt-6 border-l-2 border-black pt-4 pb-2 md:max-w-md lg:max-w-lg">
            <div v-for="exp in experience" :key="exp.id" class="mb-8 relative flex items-start flex-col gap-6">
                <fa-icon icon="fa-solid fa-circle" class="absolute -left-[9px] top-1" />
                <div class="pl-8 flex flex-col w-full">

                    <div class="flex items-center justify-between w-full">
                        <template v-if="globalLoader">
                            <TextSkeleton v-for="n in 2" :key="n" class="w-1/2 h-0" :text="true" />
                        </template>
                        <template v-else>
                            <h3 class="font-semibold text-primary-dark-200/85 text-base uppercase">{{ exp.position }}
                            </h3>
                            <p class="text-sm italic text-primary-dark-200/50 text-right">{{ exp.startDate }} - {{ exp.endDate }}</p>
                        </template> 
                    </div>

                    <TextSkeleton class="w-2/3 h-0" v-if="globalLoader" :text="true"/>
                    <h3 v-else class="font-medium text-base text-primary">{{ exp.company }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>