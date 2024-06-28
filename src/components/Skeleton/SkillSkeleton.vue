<template>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
        <div v-for="n in 12" :key="n" class="animate-pulse">
            <div class="flex w-full gap-2">
                <div class="min-h-16 min-w-16 skeleton rounded-md"></div>
                <div class="flex flex-col items-start mt-2 gap-2">
                    <div class="h-3.5 skeleton rounded-full w-20"></div>
                    <div class="h-3 skeleton rounded-full w-24"></div>
                </div>
            </div>
        </div>
    </div>

</template>