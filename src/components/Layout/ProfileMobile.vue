<script setup lang="ts">
import ButtonIcon from '../../ui/common/ButtonIcon.vue';

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
            <div v-show="profileVisibility" class=" w-full bg-primary-light z-[999] fixed inset-y-0 left-0">
                <ButtonIcon @click="$emit('toggleProfileVisibility')" :useBackground="true" icon="fa-solid fa-xmark" class="absolute top-4 right-4 rounded-full" />
                Hello Wrold
            </div>
        </Transition>
    </Teleport>
</template>