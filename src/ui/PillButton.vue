    <script setup lang="ts">
    defineProps({
        category: String,
        isActive: Boolean
    })
    </script>

    <template>
        <button
            class="btn px-6 py-0.5 text-xs md:text-sm rounded-full text-primary-light capitalize"
            :class="isActive ? 'bg-accent-200 hover:bg-accent-200/95' : 'bg-primary hover:bg-accent-200/90'">
            {{ category }}
        </button>
    </template>