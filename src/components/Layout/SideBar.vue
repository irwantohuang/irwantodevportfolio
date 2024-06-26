<script setup lang="ts">
import { profile } from '../../data/profile';
import HorizontalLine from '../../ui/common/HorizontalLine.vue';
import ProfileHeader from '../../components/Profile/ProfileHeader.vue'
import ProfileContact from '../Profile/ProfileContact.vue';
import ProfileSocialMedia from '../Profile/ProfileSocialMedia.vue';

</script>
<template>

    <aside class="hidden lg:flex w-1/4 xl:w-1/5 h-full bg-gray-500 rounded-xl overflow-hidden">
        <div class="relative container mx-auto py-[25px] bg-primary-light-200">
            <ProfileHeader :image="profile.profilePicture" :name="profile.name" :headline="profile.headline" />

            <HorizontalLine />

            <article class="flex flex-col gap-12 w-full">
                <ProfileContact :contact="profile.contact" />
                <ProfileSocialMedia :socialMedia="profile.socialMedia" />
            </article>
        </div>
    </aside>

</template>