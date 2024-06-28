<script setup lang="ts">
import { contacts } from '../data/contacts'
import ButtonText from '../ui/common/ButtonText.vue';
</script>

<template>
    <section id="client" class="relative z-30">
        <div class="container mx-auto py-[25px]">
            <h1 class="text-4xl font-medium text-primary">Would you like to be my first client? 👀 🚀</h1>

            <p class="mt-12 text-2xl text-accent-200">🤓 Hit me up on:</p>
            <div class="flex flex-col max-w-md items-center gap-3 mt-4">
                <template v-for="(contact, index) in contacts">
                    <ButtonText :outline="index % 2 !== 0" :order="true":name="contact.title" :icon="contact.icon" :link="contact.url" class="py-2"/>
                </template>
            </div>
        </div>
    </section>
</template>