<script setup lang="ts">
import ButtonIcon from '../../ui/common/ButtonIcon.vue';
import ProfileHeader from '../../components/Profile/ProfileHeader.vue'
import Icon from '../../ui/common/Icon.vue';
import HorizontalLine from '../../ui/common/HorizontalLine.vue'
import { profile } from '../../data/profile'
import ProfileContact from '../Profile/ProfileContact.vue';
import ProfileSocialMedia from '../Profile/ProfileSocialMedia.vue';

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

                <div class="container mx-auto py-[55px] h-full">
                    <div class="relative h-full flex flex-col items-center">
                        <ProfileHeader :image="profile.profilePicture" :name="profile.name" :headline="profile.headline" />

                        <HorizontalLine />

                        <article class="flex flex-col gap-4 w-full">
                            <ProfileContact :contact="profile.contact" />
                            <ProfileSocialMedia :socialMedia="profile.socialMedia" />
                        </article>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>