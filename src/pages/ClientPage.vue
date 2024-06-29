<script setup lang="ts">
import { contacts } from '../data/contacts'
import Link from '../ui/common/Link.vue';
</script>

<template>
    <section id="client" class="relative z-30">
        <div class="container mx-auto py-[25px]">
            <h1 class="text-4xl font-medium text-primary dark:text-primary-light">Would you like to be my first client?
                👀 🚀</h1>

            <p class="mt-12 text-2xl text-accent-200 dark:text-accent">🤓 Hit me up on:</p>
            <div class="flex flex-col max-w-md items-center gap-3 mt-4">
                <Link v-for="(contact, i) in contacts" :url="contact.url"
                    :class="i % 2 === 0 ? 'btn-primary' : 'btn-outline'">
                <slot>
                    <fa-icon :icon="contact.icon" />
                    {{ contact.title }} : {{ contact.name }}
                </slot>
                </Link>
            </div>
        </div>
    </section>
</template>