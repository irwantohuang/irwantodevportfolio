<template>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div v-for="n in 4" :key="n" class="animate-pulse flex flex-col gap-2">
            <div class="w-full h-28 skeleton rounded-md"></div>
        </div>
    </div>
</template>