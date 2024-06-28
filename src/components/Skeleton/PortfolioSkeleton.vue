<template>

    <div class="grid gap-x-4 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="n in 6" :key="n" class="animate-pulse flex flex-col gap-2">
            <div class="w-full h-36 skeleton rounded-md"></div>
            <div class="w-3/4 h-2.5 skeleton rounded-full"></div>
        </div>
    </div>

</template>