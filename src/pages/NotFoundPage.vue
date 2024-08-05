<template>
    <Teleport to="body">
        <div class="fixed inset-0 bg-primary-dark-200/75 flex items-center justify-center h-full z-[9999] ">
            <div class="max-w-md w-full flex flex-col gap-2 items-center justify-center py-4 bg-primary-light rounded">
                <h1 class="text-xl text-red-500">404 - Page Not Found 😵</h1>
                <p class="text-sm text-primary-dark-400/75">Sorry, the page you are looking for does not exist.</p>
                <router-link :to="{name: 'About'}" class="py-1 bg-red-300 text-primary-dark max-w-xs w-full mt-6 transition-all duration-150 hover:bg-red-400 hover:text-primary-light rounded flex items-center justify-center">
                    Close
                </router-link>
            </div>
        </div>
    </Teleport>
</template>