<script setup>
const features = [
  {
    title: "Logística Global",
    description: "Exportaciones a más de 30 países con seguimiento en tiempo real",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Soluciones Personalizadas",
    description: "Planes adaptados a las necesidades de cada cliente",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
  },
  {
    title: "Pagos Internacionales",
    description: "Sistemas seguros en múltiples divisas",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Asesoría Especializada",
    description: "Expertos disponibles 24/7 para tu negocio",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }
]
</script>

<template>
  <section class="py-16 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <!-- Encabezado -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Soluciones globales para tu negocio
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Más de 35 años conectando empresas con oportunidades internacionales
        </p>
      </div>

      <!-- Grid de características -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Item de característica -->
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300 group border border-gray-200 dark:border-gray-700"
        >
          <div class="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-5 group-hover:bg-white dark:group-hover:bg-gray-600 transition">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6 text-indigo-600 dark:text-indigo-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" :d="feature.icon" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>