<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const goToProduct = () => {
  router.push(`/product/${props.product.id}`)
}
</script>

<template>
  <div 
    class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer border border-gray-200 dark:border-gray-700"
    @click="goToProduct"
  >
    <div class="w-full h-48 flex items-center justify-center overflow-hidden bg-white-100 dark:bg-gray-700">
      <img 
        :src="product.image" 
        :alt="product.name" 
        class="max-h-full max-w-full object-contain"
      >
    </div>
    <div class="p-4">
      <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{{ product.name }}</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{{ product.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-xl font-bold text-gray-900 dark:text-white">${{ product.price }}</span>
      </div>
    </div>
  </div>
</template>