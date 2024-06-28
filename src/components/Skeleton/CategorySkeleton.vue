<template>
    <div class="animate-pulse flex flex-wrap items-center gap-2">
        <div v-for="n in 6" :key="n" :class="n % 0 === 0 ? 'w-32' : 'w-24'"
            class="h-4 rounded-full bg-primary-light-300"></div>
    </div>
</template>