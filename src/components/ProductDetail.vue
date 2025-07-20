<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ShoppingCartIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const router = useRouter()
const product = ref(null)
const quantity = ref(1)
const activeImage = ref(0)

// Datos de ejemplo - en una app real esto vendría de una API
const products = [
  {
    id: 1,
    name: "Dispensador de Papel Secamanos Continuo Profesional",
    description: "Dispensador de bobina continua con cerradura de seguridad para áreas públicas.",
    longDescription: "Dispensador automático de papel secamanos en bobina continua con corte preciso de 27 cm. Sistema de cerradura con llave para control de acceso y visor frontal para monitorear los niveles de papel. Diseñado para alto tráfico en baños públicos y áreas comerciales. No requiere energía eléctrica, baterías o mecanismos complejos.",
    price: 59.99,
    category: "bathroom",
    images: [
      "/src/assets/dispensador.png",
      "https://images.unsplash.com/photo-1616628188841-3a0d515d0f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Cerradura con llave para seguridad",
      "Dispensado automático sin contacto",
      "Capacidad para bobinas estándar de 27cm",
      "Visor transparente para control de inventario",
      "Instalación sencilla sin necesidad de electricidad"
    ],
    ratings: 4.3,
    reviews: 87
  },
  {
    id: 2,
    name: "Dosificador de Jabón Automático Premium",
    description: "Sistema de dosificación higiénico con válvula antigoteo para áreas de alto tráfico.",
    longDescription: "Dosificador profesional de jabón líquido con carcasa blanca resistente y sistema de pulsación suave. Incorpora válvula anticorrosión y sistema antigoteo para mantener limpias las superficies. Depósito rellenable de gran capacidad con cerradura de seguridad para control de acceso. Ideal para hospitales, restaurantes y baños públicos con alta rotación de usuarios.",
    price: 49.99,
    category: "hygiene",
    images: [
      "/src/assets/dosificador.png",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583944184075-5c829d23f89d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Válvula anticorrosión y antigoteo",
      "Carcasa de plástico reforzado",
      "Sistema de pulsación suave",
      "Depósito de 1000ml rellenable",
      "Cerradura con llave incluida"
    ],
    ratings: 4.6,
    reviews: 112
  },
  {
    id: 3,
    name: "Portarrollos de Papel Higiénico Industrial",
    description: "Dispensador robusto para rollos grandes de hasta 400 metros y 260mm de diámetro.",
    longDescription: "Dispensador industrial de papel higiénico en rollos de gran capacidad. Fabricado en acero laminado blanco resistente a la corrosión. Compatible con mandriles de 18 a 55mm y rollos de hasta 260mm de diámetro. Diseño clásico AE13300 especialmente desarrollado para áreas de alto tráfico como centros comerciales, aeropuertos y establecimientos públicos.",
    price: 79.99,
    category: "bathroom",
    images: [
      "/src/assets/portarollos.png",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600181958015-b1d69253907a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Capacidad para rollos de 400 metros",
      "Máximo diámetro de 260mm",
      "Mandril ajustable 18-55mm",
      "Carcasa de acero laminado blanco",
      "Diseño resistente para uso intensivo"
    ],
    ratings: 4.4,
    reviews: 93
  },
  {
    id: 4,
    name: "Papelera con Tapa Pedal 8L",
    description: "Solución higiénica con apertura por pedal y capacidad de 8 litros.",
    longDescription: "Papelera de plástico resistente con tapa abatible que se activa mediante pedal. Capacidad de 8 litros ideal para oficinas y baños. Diseño blanco discreto que combina con cualquier decoración. Sistema de apertura sin contacto que promueve la higiene. Base antideslizante para mayor estabilidad durante el uso.",
    price: 29.99,
    category: "office",
    images: [
      "/src/assets/papelera.png",
      "https://images.unsplash.com/photo-1600181954342-1b5b6d73d669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600181954342-1b5b6d73d669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Apertura higiénica por pedal",
      "Capacidad 8 litros",
      "Plástico resistente y fácil de limpiar",
      "Tapa que evita olores",
      "Base antideslizante"
    ],
    ratings: 4.2,
    reviews: 65
  },
  {
    id: 5,
    name: "Jarra Isotérmica de Acero Inoxidable",
    description: "Mantiene bebidas frías o calientes durante horas con doble pared de aislamiento.",
    longDescription: "Jarra térmica profesional de acero inoxidable con aislamiento de doble pared al vacío. Mantiene las temperaturas durante horas (hasta 12h caliente y 24h frío). Insertos de acero inoxidable irrompible. Disponible en capacidades de 1 litro y 2 litros. No apta para lavavajillas - limpieza recomendada con agua y jabón neutro.",
    price: 39.99,
    category: "kitchen",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600181954342-1b5b6d73d669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600181954342-1b5b6d73d669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Aislamiento térmico de doble pared",
      "Mantiene temperatura 12h caliente/24h frío",
      "Acero inoxidable 18/8",
      "Base antideslizante",
      "Tapón hermético anti-derrames"
    ],
    ratings: 4.7,
    reviews: 156
  },
  {
    id: 6,
    name: "Báscula Digital Rowenta",
    description: "Precisión profesional con superficie de vidrio templado y pantalla LCD.",
    longDescription: "Báscula de baño digital Rowenta con superficie de vidrio templado de 30x30 cm. Capacidad máxima de 150 kg con precisión de 100 gramos. Pantalla LCD grande y fácil de leer. Funcionamiento automático al pisar la superficie. Incluye batería CR2032 de larga duración. Diseño elegante y minimalista que combina con cualquier baño.",
    price: 44.99,
    category: "health",
    images: [
      "/src/assets/bascula.png",
      "https://images.unsplash.com/photo-1600181954342-1b5b6d73d669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600181954342-1b5b6d73d669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Capacidad 150 kg",
      "Precisión de 100 gramos",
      "Superficie de vidrio templado 30x30cm",
      "Pantalla LCD grande",
      "Funcionamiento automático"
    ],
    ratings: 4.5,
    reviews: 201
  },
  {
    id: 7,
    name: "Paraguas PANAN 8 Varillas",
    description: "Protección XL contra viento y lluvia con apertura automática.",
    longDescription: "Paraguas de gran tamaño (130cm de diámetro) con sistema de 8 varillas de fibra resistente. Mecanismo de apertura automática con un solo botón. Tejido de poliéster impermeable con tratamiento UV. Mango ergonómico acolchado en EVA para mayor comodidad. Incluye cierre de velcro y funda protectora. Color Azul Prusia con logo serigrafiado en blanco.",
    price: 34.99,
    category: "outdoor",
    images: [
      "/src/assets/paraguas.png",
      "https://images.unsplash.com/photo-1600181954342-1b5b6d73d669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600181954342-1b5b6d73d669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Diámetro XL de 130cm",
      "8 varillas de fibra reforzada",
      "Apertura automática con botón",
      "Mango ergonómico acolchado",
      "Tejido impermeable y resistente"
    ],
    ratings: 4.4,
    reviews: 178
  },
  {
    id: 8,
    name: "Tabla de Planchar Profesional",
    description: "Superficie extra grande con 7 niveles de altura ajustable.",
    longDescription: "Tabla de planchar profesional con superficie de 1100 x 330 mm y altura máxima de 850 mm. Sistema de 7 niveles de altura ajustable para mayor comodidad. Funda de algodón con triple capa: refuerzo de fieltro, esponja de 10mm y cubierta transpirable. Estructura metálica estable con patas antideslizantes. Plegado sencillo para almacenamiento.",
    price: 54.99,
    category: "home",
    images: [
      "/src/assets/tabla.png",
      "https://images.unsplash.com/photo-1600181954342-1b5b6d73d669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600181954342-1b5b6d73d669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Superficie extra grande (110x33cm)",
      "7 niveles de altura (hasta 85cm)",
      "Funda de algodón con triple capa",
      "Estructura metálica estable",
      "Plegado fácil para almacenar"
    ],
    ratings: 4.6,
    reviews: 92
  },
  {
    id: 9,
    name: "Plancha Eléctrica 1000W",
    description: "Potente plancha de vapor con suela antiadherente y sistema antical.",
    longDescription: "Plancha eléctrica de 1000W con función de vapor para un planchado perfecto. Suela antiadherente de cerámica que desliza sin dañar las prendas. Sistema antical incorporado. Cable de 2 metros con protección contra enredos. Dimensiones compactas (25,2 x 10,5 x 12,4 cm) para fácil almacenamiento. Funciona con voltaje estándar de 220V y frecuencia 50-60Hz.",
    price: 39.99,
    category: "home",
    images: [
      "/src/assets/plancha.png",
      "https://images.unsplash.com/photo-1600181954342-1b5b6d73d669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600181954342-1b5b6d73d669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Potencia 1000W",
      "Suela cerámica antiadherente",
      "Función vapor continua",
      "Sistema antical",
      "Cable de 2m con protección"
    ],
    ratings: 4.3,
    reviews: 134
  },
  {
    id: 10,
    name: "Sacacorchos Profesional 3 en 1",
    description: "Herramienta multifunción para vinos con diseño ergonómico y acero inoxidable.",
    longDescription: "Sacacorchos profesional tipo camarero con abridor de botellas y cuchilla cortacápsulas integrados. Fabricado en acero inoxidable de alta calidad con mangos ergonómicos antideslizantes. Diseño compacto y elegante en color negro. Ideal para restaurantes, bares y enólogos aficionados. Incluye garantía de por vida contra defectos de fabricación.",
    price: 24.99,
    category: "kitchen",
    images: [
      "/src/assets/sacacorchos.jpg",
      "https://images.unsplash.com/photo-1600181954342-1b5b6d73d669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600181954342-1b5b6d73d669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Acero inoxidable quirúrgico",
      "Sacacorchos de doble palanca",
      "Abridor de botellas integrado",
      "Cuchilla cortacápsulas",
      "Diseño ergonómico antideslizante"
    ],
    ratings: 4.8,
    reviews: 287
  }
]

onMounted(() => {
  // Hacer scroll al inicio cuando se carga la página
  window.scrollTo(0, 0)
  
  const productId = parseInt(route.params.id)
  product.value = products.find(p => p.id === productId)
})


const setActiveImage = (index) => {
  activeImage.value = index
}
</script>

<template>
    <div v-if="product" class="min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <!-- Botón de volver -->
      <button 
        @click="router.go(-1)"
        class="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-6 transition-colors"
      >
        <ArrowLeftIcon class="h-5 w-5 mr-2" />
        Volver a productos
      </button>

      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <!-- Galería de imágenes -->
        <div class="mb-8 lg:mb-0">
          <!-- Imagen principal más pequeña -->
          <div class="relative rounded-lg overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800 h-96 flex items-center justify-center">
            <img 
              :src="product.images[activeImage]" 
              :alt="product.name"
              class="max-h-full max-w-full object-contain p-4"
            >
          </div>
          
          <!-- Miniaturas (más pequeñas también) -->
          <div class="grid grid-cols-4 gap-2">
            <div 
              v-for="(image, index) in product.images" 
              :key="index"
              @click="setActiveImage(index)"
              :class="[
                'relative h-20 rounded-md overflow-hidden cursor-pointer transition-all',
                activeImage === index 
                  ? 'border-2 border-indigo-500 dark:border-indigo-400 ring-2 ring-indigo-200 dark:ring-indigo-800' 
                  : 'border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500'
              ]"
            >
              <div class="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-1">
                <img 
                  :src="image" 
                  :alt="`Vista ${index + 1} de ${product.name}`"
                  class="max-h-full max-w-full object-contain"
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Detalles del producto -->
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ product.name }}</h1>
          
          <div class="flex items-center mb-4">
            <div class="flex items-center">
              <span class="text-yellow-400 mr-1">{{ product.ratings }}</span>
              <svg 
                v-for="i in 5" 
                :key="i" 
                class="h-5 w-5" 
                :class="i <= Math.floor(product.ratings) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span class="text-gray-500 dark:text-gray-400 ml-2">{{ product.reviews }} reseñas</span>
          </div>

          <p class="text-2xl font-bold text-gray-900 dark:text-white mb-6">${{ product.price.toFixed(2) }}</p>

          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Descripción detallada</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ product.longDescription }}</p>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Características</h3>
            <ul class="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
              <li v-for="(feature, index) in product.features" :key="index">{{ feature }}</li>
            </ul>
          </div>

          <div class="border-t dark:border-gray-700 pt-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Envío y devoluciones</h3>
            <p class="text-gray-600 dark:text-gray-400">Envío gratuito en pedidos superiores a $50. Devoluciones fáciles dentro de los 30 días.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>