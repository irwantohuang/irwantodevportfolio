<script setup lang="ts">
import { ref } from 'vue';
import Icon from '../../ui/common/Icon.vue';
import Link from '../../ui/common/Link.vue';

const props = defineProps({
    livePreview: String,
    github: String,
    type: String,

})
const links = ref([
    { id: 1, name: 'Github Repository', icon: 'fa-brands fa-github', url: props.github},
    { id: 2, name: 'Live Preview', icon: 'fa-solid fa-up-right-from-square', url: props.livePreview}
])

const redirectTo = (url?: string) => window.open(url, "_blank")

</script>

<template>
    <div v-if="type === 'mobile'" class="flex gap-4 ">
        <Icon v-for="link in links" :icon="link.icon" class="min-w-[30px] min-h-[30px] icon-default icon-non-bg shadow-sm text-xl" @click="redirectTo(link.url)" />
    </div>

    <div v-if="type === 'desktop'" class="flex flex-col gap-2 w-full items-start mt-4">

        <Link v-for="link in links" :url="link.url" :class="link.id === 1 ? 'btn-primary' : 'btn-outline'">
            <slot>
                {{ link.name }}
                <fa-icon :icon="link.icon" />
            </slot>
        </Link>
    </div>
</template>