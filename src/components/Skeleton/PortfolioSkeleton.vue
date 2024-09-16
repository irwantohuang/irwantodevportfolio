<template>
    <div v-for="n in 2" :key="n">
        <div class="flex items-start gap-2 animate-pulse mt-4">
            <div class="aspect-video w-1/2 skeleton rounded-md"></div>
            <div class="flex flex-col w-1/2">
                <div class="w-3/4 h-8 skeleton rounded-md"></div>
                <div class="w-full h-3 skeleton rounded-md mt-4"></div>
                <div class="w-full h-3 skeleton rounded-md mt-2"></div>
                <div class="w-full h-3 skeleton rounded-md mt-2"></div>
                <div class="w-4/5 h-3 skeleton rounded-md mt-2"></div>
                <div class="w-2/3 h-3 skeleton rounded-md mt-2"></div>

<<<<<<< HEAD
                <div class="flex items-center flex-wrap flex-row mt-4 gap-x-2 gap-y-1">
                    <div v-for="n in 8" :key="n" class="h-2 skeleton rounded mt-1"
                        :class="n % 3 === 0 ? 'w-1/4' : 'w-1/6'"></div>
=======
                <div  class="flex items-center flex-wrap flex-row mt-4 gap-x-2 gap-y-1">
                    <div v-for="n in 8" :key="n" class="h-2 skeleton rounded mt-1"
                        :class="n % 3 === 0 ? 'w-1/4' : 'w-1/6'"
                    ></div>
>>>>>>> fb0d0d1 (fixing)
                </div>

                <div class="flex items-center gap-2 w-full mt-8">
                    <div class="w-1/2 h-8 skeleton rounded-md"></div>
                    <div class="w-1/2 h-8 skeleton rounded-md"></div>
                </div>
            </div>
        </div>
    </div>
<<<<<<< HEAD
=======

>>>>>>> fb0d0d1 (fixing)
</template>