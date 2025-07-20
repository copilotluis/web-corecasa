<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useThemeStore } from '../stores/theme'
import { debounce } from 'lodash'
import { 
  MagnifyingGlassIcon, 
  SunIcon, 
  MoonIcon, 
  ChatBubbleBottomCenterTextIcon,
  XMarkIcon 
} from '@heroicons/vue/24/outline'

const themeStore = useThemeStore()
const router = useRouter()
const route = useRoute()
const searchQuery = ref('')
const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Inicio', path: '/', exact: true },
  { name: 'Sobre Nosotros', path: '/about' },
  { name: 'Productos', path: '/products' },
  { name: 'Contacto', path: '/#contact', hash: 'contact' }
]

const openWhatsApp = () => {
  const phoneNumber = '34620304324'
  const message = 'Hola, me gustaría obtener más información sobre...'
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const performSearch = debounce(() => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/products',
      query: { search: searchQuery.value.trim() }
    })
  } else {
    router.push('/products')
  }
  isMobileMenuOpen.value = false
}, 300)

const isActive = (item) => {
  if (item.exact) {
    return route.path === item.path && !route.hash
  }
  
  if (item.hash) {
    return route.path === '/' && route.hash === `#${item.hash}`
  }
  
  return route.path.startsWith(item.path)
}

const navigateTo = (item) => {
  if (item.hash) {
    // Comportamiento especial para contacto
    if (route.path !== '/') {
      router.push('/#contact')
    } else {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
      window.history.pushState(null, '', '/#contact')
    }
  } else {
    // Para otras páginas, ir al inicio y luego navegar
    window.scrollTo(0, 0)
    router.push(item.path)
  }
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Sección izquierda - Navegación desktop -->
        <nav class="hidden md:flex space-x-8">
          <template v-for="item in navItems" :key="item.name">
            <button
              @click="navigateTo(item)"
              :class="[
                'px-1 py-2 text-sm font-medium transition text-left',
                isActive(item) 
                  ? 'text-indigo-600 dark:text-indigo-400 font-semibold border-b-2 border-indigo-600 dark:border-indigo-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
              ]"
            >
              {{ item.name }}
            </button>
          </template>
        </nav>

        <!-- Menú móvil - Botón hamburguesa -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          aria-label="Menú principal"
        >
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <XMarkIcon v-else class="h-6 w-6" />
        </button>

        <!-- Logo -->
        <div class="flex items-center justify-center flex-1 md:flex-none">
          <router-link 
            to="/" 
            @click="window.scrollTo(0, 0)"
            class="flex items-center"
          >
            <img src="../assets/logo.png" alt="Logo" class="h-8 mr-2">
            <span class="text-xl font-bold text-gray-900 dark:text-white">Corecasa</span>
          </router-link>
        </div>

        <!-- Sección derecha -->
        <div class="flex items-center space-x-4">
          <!-- Buscador desktop -->
          <div class="hidden md:flex relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar productos..."
              class="pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 dark:text-white"
            >
            <button 
              @click="performSearch"
              class="absolute right-3 top-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <MagnifyingGlassIcon class="h-5 w-5" />
            </button>
          </div>

          <!-- Botón de WhatsApp desktop -->
          <button
            @click="openWhatsApp"
            class="hidden md:flex items-center space-x-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-full transition-colors duration-300"
            aria-label="Contactar por WhatsApp"
          >
            <ChatBubbleBottomCenterTextIcon class="h-5 w-5" />
            <span class="text-sm font-medium">WhatsApp</span>
          </button>

          <!-- Botón de WhatsApp móvil -->
          <button
            @click="openWhatsApp"
            class="md:hidden p-2 text-green-500 hover:text-green-600"
            aria-label="Contactar por WhatsApp"
          >
            <ChatBubbleBottomCenterTextIcon class="h-6 w-6" />
          </button>

          <!-- Toggle de tema -->
          <button 
            @click="themeStore.toggleTheme"
            class="p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            aria-label="Cambiar tema"
          >
            <SunIcon v-if="!themeStore.darkMode" class="h-6 w-6" />
            <MoonIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Menú móvil desplegable -->
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div 
          v-show="isMobileMenuOpen"
          class="md:hidden pb-3"
        >
          <div class="px-2 pt-2 pb-3 space-y-1">
            <button
              v-for="item in navItems"
              :key="item.name"
              @click="navigateTo(item)"
              :class="[
                'block px-3 py-2 rounded-md text-base font-medium w-full text-left',
                isActive(item)
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30'
                  : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              ]"
            >
              {{ item.name }}
            </button>
          </div>
          
          <!-- Buscador móvil -->
          <div class="px-2 pt-2">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Buscar productos..."
                class="w-full pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 dark:text-white"
              >
              <button 
                @click="performSearch"
                class="absolute right-3 top-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <MagnifyingGlassIcon class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>