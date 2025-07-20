<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    id: 1,
    name: 'Roberto Fernández',
    role: 'Importador de alimentos',
    content: 'Corecasa ha sido nuestro socio estratégico para importar productos alimenticios a Latinoamérica. Su logística impecable y conocimiento de regulaciones nos ha ahorrado miles en costos operativos.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Laura Martínez',
    role: 'Distribuidora hotelera',
    content: 'Llevamos 5 años trabajando con Corecasa para equipar nuestros hoteles. Su capacidad para manejar grandes volúmenes y cumplir plazos ajustados es excepcional.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Carlos Wong',
    role: 'Comerciante mayorista',
    content: 'Como distribuidor en Asia, valoramos la transparencia y eficiencia de Corecasa. Sus reportes de seguimiento en tiempo real nos dan total visibilidad de la cadena de suministro.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 4,
    name: 'Sofía Ramírez',
    role: 'CEO Cadena de Retail',
    content: 'Corecasa resolvió nuestros desafíos de abastecimiento durante la pandemia. Su red global de proveedores nos permitió mantener operaciones cuando otros no pudieron.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
  }
])

const currentTestimonial = ref(0)

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length
}

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.value.length) % testimonials.value.length
}
</script>

<template>
  <section class="relative py-16 bg-gray-900/90">
    <div class="absolute inset-0 bg-[url('@/assets/hero.jpg')] bg-cover bg-center opacity-20"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Encabezado -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Confianza global desde 1986
        </h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          Más de 1,200 empresas confían en nuestros servicios de exportación cada año
        </p>
      </div>

      <!-- Testimonios -->
      <div class="max-w-4xl mx-auto">
        <div class="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg">
          <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
            <!-- Avatar -->
            <div class="flex-shrink-0">
              <img 
                :src="testimonials[currentTestimonial].avatar" 
                :alt="testimonials[currentTestimonial].name"
                class="w-20 h-20 rounded-full object-cover border-2 border-indigo-500"
              >
            </div>
            
            <!-- Contenido -->
            <div class="text-center md:text-left">
              <!-- Rating -->
              <div class="flex justify-center md:justify-start mb-3">
                <div v-for="star in 5" :key="star" class="text-yellow-400">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    :class="{'text-gray-400': star > testimonials[currentTestimonial].rating}"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              
              <!-- Texto del testimonio -->
              <blockquote class="text-lg text-gray-300 mb-4">
                "{{ testimonials[currentTestimonial].content }}"
              </blockquote>
              
              <!-- Información del cliente -->
              <div class="text-white">
                <p class="font-semibold">{{ testimonials[currentTestimonial].name }}</p>
                <p class="text-sm text-gray-400">{{ testimonials[currentTestimonial].role }}</p>
              </div>
            </div>
          </div>
          
          <!-- Controles -->
          <div class="flex justify-center mt-8 space-x-4">
            <button 
              @click="prevTestimonial"
              class="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition"
              aria-label="Testimonio anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div class="flex space-x-2">
              <button 
                v-for="(testimonial, index) in testimonials" 
                :key="testimonial.id"
                @click="currentTestimonial = index"
                class="w-3 h-3 rounded-full transition"
                :class="index === currentTestimonial ? 'bg-indigo-500' : 'bg-gray-500'"
                :aria-label="`Ir al testimonio ${index + 1}`"
              ></button>
            </div>
            
            <button 
              @click="nextTestimonial"
              class="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition"
              aria-label="Siguiente testimonio"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}
</style>