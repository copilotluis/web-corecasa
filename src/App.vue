<script setup>
import Navbar from './components/Navbar.vue'
import AppFooter from './components/AppFooter.vue'
import { ref, onMounted, onUnmounted } from 'vue'

// Lógica para el botón de scroll
const showScrollButton = ref(false)

const checkScroll = () => {
  showScrollButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Configurar el event listener al montar el componente
onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

// Limpiar el event listener al desmontar
onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Navbar />
  
<RouterView v-slot="{ Component, route }">
  <Transition :name="route.meta.transition || 'page'">
    <component :is="Component" />
  </Transition>
</RouterView>
  
  <AppFooter />

  <!-- Botón flotante -->
  <button
    v-show="showScrollButton"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-opacity duration-300"
    aria-label="Volver al inicio"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
</template>

<style>
/* Transiciones globales entre páginas */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Opcional: Transición suave para el botón de scroll */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>