<script setup>
import { CheckIcon } from '@heroicons/vue/24/outline'

const features = [
  'Más de 35 años de experiencia en comercio internacional',
  'Equipo de expertos en logística global',
  'Cumplimiento garantizado en todas las exportaciones',
  'Compromiso con la calidad y servicio personalizado'
]

const teamMembers = [
  {
    name: 'María González',
    role: 'Fundadora & CEO',
    bio: 'Pionera en comercio internacional con más de 30 años de experiencia en exportaciones.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Carlos Mendoza',
    role: 'Director de Operaciones',
    bio: 'Especialista en cadena de suministro global y cumplimiento aduanero.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Ana López',
    role: 'Jefa de Relaciones Internacionales',
    bio: 'Experta en regulaciones de comercio exterior y negociaciones internacionales.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
  }
]

const specialties = [
  {
    title: "Alimentación y Bebidas",
    description: "Exportación de productos alimenticios y bebidas para el sector HORECA",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Insumos Hoteleros",
    description: "Todo lo necesario para equipar hoteles y establecimientos turísticos",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Materiales de Construcción",
    description: "Soluciones completas para proyectos de construcción y reformas",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
]
</script>

<template>
  <section class="bg-white dark:bg-gray-800 py-16">
    <div class="container mx-auto px-4">
      <!-- Sección de historia actualizada -->
      <div class="max-w-4xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Tu casa global de exportación desde 1986</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
          En Corecasa somos más que una empresa, somos una familia comprometida con brindar soluciones de exportación de alta calidad a empresas y tiendas de todo el mundo.
        </p>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Nos especializamos en la exportación de una amplia gama de productos, desde alimentos y bebidas hasta insumos hoteleros y materiales de construcción. Nuestra misión es proporcionar a cada cliente una experiencia sin problemas y brindar productos de calidad que impulsen su éxito comercial.
        </p>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Sabemos que cada empresa es única, por lo que adaptamos nuestro enfoque para satisfacer las necesidades específicas de cada cliente. Ya sea que esté estableciendo un nuevo restaurante, una tienda minorista o una gran corporación, estamos aquí para ser su socio confiable en la expansión de su negocio a nivel internacional.
        </p>
      </div>

      <!-- Nueva sección de especialización -->
      <div class="max-w-7xl mx-auto mb-16">
        <div class="bg-indigo-50 dark:bg-gray-700 rounded-xl p-8 md:p-12 text-center">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            ¡Todo para la construcción y el sector hostelería!
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
            En Corecasa somos expertos en exportación de todo tipo de productos pero nuestra mayor afluencia se encuentra en productos de alimentación, insumos hoteleros y todo lo relativo al sector de la construcción.
          </p>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
            Por eso, si eres un negocio hostelero o trabajas en reformas o algo relacionado con ello, no dudes en hacer tu pedido con nosotros para proveerte de todo lo que necesitas para que tu negocio salga adelante.
          </p>
          <p class="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
            No importa donde te encuentres, ¡llegamos a todas las partes del mundo!
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div 
            v-for="(specialty, index) in specialties" 
            :key="index"
            class="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <img 
              :src="specialty.image" 
              :alt="specialty.title"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ specialty.title }}</h4>
              <p class="text-gray-600 dark:text-gray-300">{{ specialty.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección de valores - Ahora con modo oscuro -->
      <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 md:p-12 mb-16 text-gray-900 dark:text-gray-100 shadow-md hover:shadow-xl transition">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Lo que nos diferencia</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(feature, index) in features" :key="index" class="flex items-start">
            <div class="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 rounded-lg p-2 mt-1">
              <CheckIcon class="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-medium text-gray-900 dark:text-white">{{ feature }}</h4>
            </div>
          </div>
        </div>
      </div>

      <!-- Equipo - Tarjetas con modo oscuro -->
      <div>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Nuestro equipo ejecutivo</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="member in teamMembers" 
            :key="member.name" 
            class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition p-6 text-center"
          >
            <img 
              :src="member.image" 
              :alt="member.name" 
              class="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-indigo-100 dark:border-indigo-900"
            >
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">{{ member.name }}</h4>
            <p class="text-indigo-600 dark:text-indigo-400 mb-2">{{ member.role }}</p>
            <p class="text-gray-600 dark:text-gray-300">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>