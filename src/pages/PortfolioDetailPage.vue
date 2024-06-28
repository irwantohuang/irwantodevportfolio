<script setup lang="ts">
import { computed, ref } from 'vue';
import { router } from '../router/router';
import ButtonIcon from '../ui/common/ButtonIcon.vue';
import { store } from '../store/store';

// const closeDetail = () => router.push({ name: 'Portfolio' })

const openDetail = () => {
    showDetail.value = true;
};

const active = computed(() => store.state.modal.baseModal);

const showDetail = ref(true);

const closeDetail = () => {
    store.dispatch('modal/toggleModal')
    showDetail.value = false;
    setTimeout(() => {
        router.push({ name: 'Portfolio' });
    }, 300); // Durasi transisi harus sama dengan CSS transition-duration
};

openDetail();

</script>
<template>
    <Transition name="slide-up">
        <div v-show="active" class="px-2 h-full w-full absolute inset-x-0 bottom-0 bg-primary-light-300/90">
            <div class="relative container mx-auto py-[25px]">
                Hllow world 
                <div class="absolute top-2 right-2">
                    <ButtonIcon @click="closeDetail()" icon="fa-solid fa-xmark" />

                </div>

            </div>
        </div>
    </Transition>
</template>