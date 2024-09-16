<template>

    <!-- <div class="grid gap-x-4 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="n in 6" :key="n" class="animate-pulse flex flex-col gap-2">
            <div class="w-full h-36 skeleton rounded-md"></div>
            <div class="w-3/4 h-2.5 skeleton rounded-full"></div>
        </div>
    </div> -->

    <template v-for="n in 2" :key="n">
        <div class="flex items-start gap-2 animate-pulse mt-4">
            <div class="aspect-video w-1/2 skeleton rounded-md"></div>
            <div class="flex flex-col w-1/2">
                <div class="w-3/4 h-8 skeleton rounded-md"></div>
                <div class="w-full h-3 skeleton rounded-md mt-4"></div>
                <div class="w-full h-3 skeleton rounded-md mt-2"></div>
                <div class="w-full h-3 skeleton rounded-md mt-2"></div>
                <div class="w-4/5 h-3 skeleton rounded-md mt-2"></div>
                <div class="w-2/3 h-3 skeleton rounded-md mt-2"></div>

                <div  class="flex items-center flex-wrap flex-row mt-4 gap-x-2 gap-y-1">
                    <div v-for="n in 8" :key="n" class="h-2 skeleton rounded mt-1"
                        :class="n % 3 === 0 ? 'w-1/4' : 'w-1/6'"
                    ></div>
                </div>

                <div class="flex items-center gap-2 w-full mt-8">
                    <div class="w-1/2 h-8 skeleton rounded-md"></div>
                    <div class="w-1/2 h-8 skeleton rounded-md"></div>
                </div>
            </div>
        </div>
    </template>

</template>