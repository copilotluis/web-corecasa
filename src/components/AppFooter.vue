<script setup>
const links = {
  productos: [
    { name: 'Alimenticios', href: '/products' },
    { name: 'Materiales construcción', href: '/products' },
    { name: 'Catálogo completo', href: '/products' }
  ],
  legal: [
    { name: 'Aviso legal', href: '/legal' },
    { name: 'Política de privacidad', href: '/privacy' },
    { name: 'Política de Cookies', href: '/cookies' }
  ]
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/exportaciones-mallorca',
    icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/exportacionesmallorca',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
  }
]

const paymentMethods = [
  {
    name: 'Transferencia bancaria',
    icon: 'M8 4a4 4 0 100 8 4 4 0 000-8zM6.5 8a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16 12h-3a1 1 0 01-1-1V9a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 01-1 1z'
  },
  {
    name: 'Crédito documentario',
    icon: 'M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zm1 2h14v9a2 2 0 01-2 2H7a2 2 0 01-2-2V6zm12 11a1 1 0 100-2 1 1 0 000 2z'
  }
]
</script>

<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <!-- Sección superior -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <!-- Logo y descripción -->
        <div class="lg:col-span-1">
          <div class="flex items-center mb-4">
            <a href="/" class="text-xl font-bold">Exportaciones Mallorca</a>
          </div>
          <p class="text-gray-400 mb-4">
            Especialistas en exportación de alimentos y materiales de construcción desde Palma de Mallorca.
          </p>
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.href" 
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition"
              :aria-label="social.name"
            >
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Enlaces rápidos -->
        <div v-for="(section, title) in links" :key="title" class="mt-4 md:mt-0">
          <h3 class="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
            {{ title }}
          </h3>
          <ul class="space-y-3">
            <li v-for="link in section" :key="link.name">
              <a 
                :href="link.href" 
                class="text-gray-400 hover:text-white transition"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contacto -->
        <div class="mt-4 md:mt-0">
          <h3 class="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
            Contacto
          </h3>
          <address class="text-gray-400 not-italic mb-4">
            <p class="mb-2">Calle Exportación, 123</p>
            <p class="mb-2">07011 Palma de Mallorca</p>
            <p class="mb-2">Tel: <a href="tel:+34971123456" class="hover:text-white">+34 971 123 456</a></p>
            <p>Email: <a href="mailto:info@exportmallorca.com" class="hover:text-white">info@exportmallorca.com</a></p>
          </address>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 my-8"></div>

      <div class="w-full">
      <img 
        src="/src/assets/footer-image.png" 
        alt="Descripción de la imagen" 
        class="w-full h-auto object-cover"
      >
      </div>

    <div class="border-t border-gray-800 my-8"></div>

      <!-- Sección inferior -->
      <div class="md:flex md:items-center md:justify-center">

        <!-- Copyright y enlaces legales -->
        <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <p class="text-gray-400 text-sm">
            &copy; {{ new Date().getFullYear() }} Exportaciones Mallorca. Todos los derechos reservados.
          </p>
          <div class="flex space-x-4">
            <a v-for="link in links.legal" :key="link.name" :href="link.href" class="text-gray-400 hover:text-white text-sm transition">
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>