<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

const features = [
  'Exportaciones a más de 30 países',
  'Soluciones logísticas integrales',
  'Asesoría personalizada 24/7'
]
</script>

<template>
  <section class="relative bg-gray-900 text-white overflow-hidden">
    <!-- Imagen de fondo -->
    <div class="absolute inset-0 z-0">
      <img 
        src="../assets/hero.jpg" 
        alt="Logística de exportación global"
        class="w-full h-full object-cover opacity-50"
      >
    </div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div class="md:w-1/2">
        <!-- Texto principal -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Tu puente comercial global desde 1986
        </h1>
        
        <p class="text-lg md:text-xl text-gray-300 mb-8">
          Conectamos negocios con los mejores productos internacionales. Experiencia logística que impulsa tu crecimiento en mercados globales.
        </p>
        
        <!-- Botones CTA -->
        <div class="flex flex-col sm:flex-row gap-4 mb-10">
          <a 
            href="/products" 
            class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition"
          >
            Ver catálogo
            <ChevronRightIcon class="ml-2 h-5 w-5" />
          </a>
          
        </div>
        
        <!-- Características -->
        <div class="flex flex-wrap gap-x-8 gap-y-4">
          <div v-for="(feature, index) in features" :key="index" class="flex items-center">
            <svg class="h-5 w-5 text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-gray-300">{{ feature }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Indicador de scroll -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
      <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-20px) translateX(-50%);
  }
  60% {
    transform: translateY(-10px) translateX(-50%);
  }
}
</style>