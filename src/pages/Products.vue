<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products'

const route = useRoute()
const activeCategory = ref('todos')
const searchTerm = ref('')

// Actualizar búsqueda cuando cambia la URL
watch(() => route.query.search, (newSearch) => {
  searchTerm.value = newSearch || ''
}, { immediate: true })

const categories = [
  {
    id: 'todos',
    name: 'Todos',
    icon: 'M4 6h16M4 10h16M4 14h16M4 18h16',
    description: 'Todos los productos'
  },
  {
    id: 'electronics',
    name: 'Electrónica',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    description: 'Tecnología y gadgets'
  },
  {
    id: 'home',
    name: 'Hogar',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    description: 'Para tu casa'
  },
  {
    id: 'clothing',
    name: 'Ropa',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    description: 'Moda y accesorios'
  },
  {
    id: 'sports',
    name: 'Deportes',
    icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
    description: 'Artículos deportivos'
  },
  {
    id: 'beauty',
    name: 'Belleza',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    description: 'Cuidado personal'
  }
]

const filterByCategory = (categoryId) => {
  activeCategory.value = categoryId
}

// Productos filtrados (reactivo)
const filteredProducts = computed(() => {
  let result = products
  
  // Filtrar por categoría
  if (activeCategory.value !== 'todos') {
    result = result.filter(product => product.category === activeCategory.value)
  }
  
  // Filtrar por término de búsqueda
  if (searchTerm.value) {
    const term = searchTerm.value.toLowerCase()
    result = result.filter(product => 
      product.name.toLowerCase().includes(term) || 
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    )
  }
  
  return result
})
</script>

<template>
  <main class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <!-- Sección de Categorías -->
       <section class="mb-16 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Nuestras Categorías
      </h2>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="filterByCategory(category.id)"
          :class="[
            'group relative overflow-hidden rounded-xl p-5 transition-all duration-300',
            'hover:shadow-lg hover:-translate-y-1',
            'border border-gray-200 dark:border-gray-700',
            'bg-white dark:bg-gray-800',
            activeCategory === category.id 
              ? 'ring-2 ring-primary-500 dark:ring-primary-400 shadow-md' 
              : ''
          ]"
        >
          <div class="flex flex-col items-center text-center">
            <div class="mb-3 p-3 rounded-full bg-primary-50 dark:bg-gray-700 group-hover:bg-primary-100 dark:group-hover:bg-gray-600 transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-8 w-8"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                :class="{
                  'text-primary-600 dark:text-primary-400': activeCategory === category.id,
                  'text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400': activeCategory !== category.id
                }"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="category.icon" />
              </svg>
            </div>
            
            <h3 class="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {{ category.name }}
            </h3>
            
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {{ category.description }}
            </p>
          </div>
        </button>
      </div>
    </div>
  </section>

      <!-- Sección de Búsqueda (solo móvil) -->
      <div class="md:hidden mb-6">
        <div class="relative">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Buscar productos..."
            class="w-full pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 dark:text-white"
          >
          <button class="absolute right-3 top-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
            <MagnifyingGlassIcon class="h-5 w-5" />
          </button>
        </div>
      </div>

      <!-- Resultados de búsqueda -->
      <div v-if="searchTerm" class="mb-4">
        <p class="text-gray-600 dark:text-gray-400">
          Resultados para: <span class="font-semibold">{{ searchTerm }}</span>
          <button 
            @click="searchTerm = ''" 
            class="ml-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
          >
            (Limpiar filtro)
          </button>
        </p>
      </div>

      <!-- Sección de Productos -->
      <section>
        <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard 
            v-for="product in filteredProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>
        <div v-else class="text-center py-12">
          <div class="mx-auto max-w-md bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 dark:text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">No se encontraron productos</h3>
            <p class="text-gray-500 dark:text-gray-400 mb-4">No hay productos que coincidan con tu búsqueda.</p>
            <button 
              @click="() => { searchTerm = ''; activeCategory = 'todos' }"
              class="w-full px-4 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
            >
              Ver todos los productos
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>