<template>
  <div class="privacy-policy-container bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <header class="mb-12 text-center">
        <h1 class="text-3xl sm:text-4xl font-bold mb-4">Política de Privacidad</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Última actualización: {{ new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </p>
      </header>

      <div class="prose dark:prose-invert max-w-none">
        <div class="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p class="font-medium">
            QDQ MEDIA SAU no es responsable de la recogida de datos personales a los usuarios en este apartado, 
            ni será el encargado del tratamiento de los mismos. A los efectos del cumplimiento del Reglamento (UE) 
            2016/679 del Parlamento Europeo, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de Protección de 
            Datos Personales y garantía de los derechos digitales de 5 de diciembre (LOPDGDD), se establece la 
            siguiente información.
          </p>
        </div>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">1. Responsable del tratamiento</h2>
          <ul class="space-y-2">
            <li><strong>Razón social:</strong> CORECASAMPYD, S.A.</li>
            <li><strong>NIF/CIF:</strong> A07216716</li>
            <li><strong>Dirección:</strong> Calle Pere Martell 27, 07003 Palma De Mallorca (Baleares)</li>
            <li><strong>Correo:</strong> ceo@corecasa.com</li>
          </ul>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">2. Finalidad del tratamiento</h2>
          <p class="mb-4">
            Se trata la información que nos facilitan las personas interesadas a través de cualquiera de los diferentes 
            formularios que se ponen a su disposición en la página web, con el fin de gestionar el envío de la información 
            que nos soliciten, pudiendo elaborarse, de ser necesario, un perfil comercial, en base a la información facilitada. 
            No se tomarán decisiones automatizadas en base a dicho perfil.
          </p>
          <p>
            Los datos personales proporcionados se conservarán mientras se mantenga la relación mercantil, y no se solicite 
            su supresión por el interesado.
          </p>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">3. Legitimación</h2>
          <p>
            Se solicita el consentimiento del interesado para el tratamiento de sus datos y la oferta prospectiva de productos y servicios.
          </p>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">4. Destinatarios</h2>
          <p>
            Los datos personales no se cederán a terceros, salvo en su caso, otras empresas de grupo para fines administrativos internos.
          </p>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">5. Derechos de los interesados</h2>
          <p class="mb-4">
            Los interesados tienen derecho a:
          </p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>Acceder a sus datos personales</li>
            <li>Solicitar la rectificación de los datos inexactos</li>
            <li>Solicitar su supresión cuando los datos ya no sean necesarios</li>
            <li>Limitar u oponerse al tratamiento de sus datos</li>
            <li>Solicitar la portabilidad de los datos</li>
            <li>Retirar su consentimiento</li>
            <li>Presentar una queja ante la Autoridad de Control</li>
          </ul>
          <p>
            Para ejercer sus derechos deberá dirigirse al Responsable en la dirección que figura en el primer apartado, 
            acompañado de copia del documento de identidad del interesado.
          </p>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">6. Transferencias internacionales</h2>
          <p>
            No realizamos transferencias internacionales de sus datos.
          </p>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">7. Aviso legal</h2>
          <p class="mb-4">
            Todos los textos, fotografías, logotipos, cupones, productos, servicios e imágenes visualizadas, así como, 
            en su caso, los mensajes de voz, son recogidos por QDQ MEDIA SAU bajo la responsabilidad única y exclusiva 
            del Anunciante, quien es responsable de la veracidad de la información contenida en la página web.
          </p>
          <p class="mb-4">
            Existen hojas de reclamaciones a disposición del consumidor en la dirección de CORECASAMPYD, S.A., 
            NIF/ CIF: A07216716: Calle Pere Martell 27, 07003 Palma De Mallorca (Baleares), pudiendo ponerse 
            en contacto en cualquier momento en la dirección de correo electrónico ceo@corecasa.com.
          </p>
          <p>
            De acuerdo a lo previsto en la legislación nacional y comunitaria con respecto a protección al consumidor, 
            se ofrece la posibilidad de recurrir a un mecanismo de reclamación y resolución de conflicto en línea, 
            conforme al artículo 14 del Reglamento 524/2013 de la UE. La Comisión facilita esta plataforma que está 
            disponible en el siguiente enlace: 
            <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=ES" 
               class="text-blue-600 dark:text-blue-400 hover:underline" 
               target="_blank" 
               rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
// Puedes añadir lógica adicional si es necesario
</script>

<style scoped>
.privacy-policy-container {
  line-height: 1.6;
}

.prose {
  color: inherit;
}

.prose h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: inherit;
}

.prose ul {
  margin-bottom: 1rem;
}

.prose a {
  text-decoration: none;
  font-weight: 500;
}

.prose a:hover {
  text-decoration: underline;
}

.dark .prose {
  color: #e5e7eb;
}
</style>