<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isLoading = ref(false)
const isSuccess = ref(false)
const error = ref(null)

const submitForm = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    error.value = 'Por favor completa todos los campos requeridos'
    return
  }

  isLoading.value = true
  error.value = null

  try {
    // Simulamos el envío del email (en producción usarías un servicio real)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    isSuccess.value = true
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch (err) {
    error.value = 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.'
    console.error('Error sending email:', err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-16 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Encabezado -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contáctanos
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            ¿Tienes preguntas? Escríbenos y nuestro equipo te responderá pronto.
          </p>
        </div>

        <!-- Contenedor del formulario e información -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div class="md:flex">
            <!-- Información de contacto -->
            <div class="md:w-2/5 bg-gray-50 dark:bg-gray-700 p-8 md:p-10">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">Información de contacto</h3>
              
              <div class="space-y-5">
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 rounded-lg p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">Email del CEO</h4>
                    <a href="mailto:ceo@tutienda.com" class="text-base text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">ceo@corecasa.com</a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 rounded-lg p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">Teléfono</h4>
                    <a href="tel:+1234567890" class="text-base text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">+34 620 30 43 24</a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 rounded-lg p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">Dirección</h4>
                    <p class="text-base text-gray-700 dark:text-gray-300">Calle Exportación, 123, 07011 Palma de Mallorca

</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Formulario -->
            <div class="md:w-3/5 p-8 md:p-10">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">Envíanos un mensaje</h3>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <!-- Mensaje de éxito/error -->
                <div v-if="isSuccess" class="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-200 px-4 py-3 rounded">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </div>
                
                <div v-if="error" class="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded">
                  {{ error }}
                </div>

                <!-- Campos del formulario -->
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre completo *</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition"
                    required
                  >
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition"
                    required
                  >
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Asunto</label>
                  <input 
                    type="text" 
                    id="subject" 
                    v-model="form.subject"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition"
                  >
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje *</label>
                  <textarea 
                    id="message" 
                    v-model="form.message"
                    rows="4"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition"
                    required
                  ></textarea>
                </div>

                <div>
                  <button 
                    type="submit"
                    :disabled="isLoading"
                    class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 dark:bg-indigo-700 hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    :class="{'opacity-70 cursor-not-allowed': isLoading}"
                  >
                    <span v-if="!isLoading">Enviar mensaje</span>
                    <span v-else class="flex items-center">
                      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>