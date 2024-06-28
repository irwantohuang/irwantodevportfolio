<script setup lang="ts">
import ButtonText from '../../ui/common/ButtonText.vue';
import Icon from '../../ui/common/Icon.vue';

defineProps({
    livePreview: String,
    github: String,
    type: String,
})

</script>

<template>
    <div v-if="type === 'mobile'" class="flex gap-4 ">
        <Icon class="min-w-[30px] min-h-[30px] text-xl bg-primary text-primary-light dark:bg-accent" icon="fa-brands fa-github" :link="github" />
        <Icon class="min-w-[30px] min-h-[30px] text-xl bg-accent-200 text-primary-light"
            icon="fa-solid fa-up-right-from-square" :link="livePreview" />
    </div>

    <div v-if="type === 'desktop'" class="flex flex-col gap-2 w-full items-start mt-4">
        <ButtonText icon="fa-solid fa-up-right-from-square" :outline="false" name="Live Preview" :link="livePreview" />
        <ButtonText icon="fa-brands fa-github" :outline="true" name="Github" :link="github" />
    </div>
</template>