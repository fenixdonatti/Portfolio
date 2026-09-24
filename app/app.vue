<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()

const siteUrl = (config.public.siteUrl || useRequestURL().origin).replace(/\/$/, '')
const personId = `${siteUrl}/#person`

useHead({
  title: 'Fênix Rodrigues Pedro | Desenvolvedor de Software',

  meta: [
    {
      name: 'description',
      content:
        'Portfólio de Fênix Rodrigues Pedro, Desenvolvedor de Software. Conheça meus projetos, experiências e tecnologias.'
    },

    // Open Graph
    {
      property: 'og:title',
      content: 'Fênix Rodrigues Pedro | Desenvolvedor de Software'
    },
    {
      property: 'og:description',
      content:
        'Portfólio de Fênix Rodrigues Pedro, Desenvolvedor de Software. Conheça meus projetos, experiências e tecnologias.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: siteUrl
    },
    {
      property: 'og:image',
      content: `${siteUrl}/og-image.jpg`
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    },
    {
      property: 'og:image:alt',
      content: 'Portfólio de Fênix Rodrigues Pedro'
    },
    {
      property: 'og:locale',
      content: 'pt_BR'
    },
  ],

  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': personId,
            name: 'Fênix Rodrigues Pedro',
            url: siteUrl,
            jobTitle: 'Desenvolvedor de Software',
            sameAs: [
              'https://www.linkedin.com/in/fenixrodrigues/',
            ],
            knowsAbout: [
              'Java',
              'Spring Boot',
              'TypeScript',
              'Vue.js',
              'Nuxt',
            ],
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: 'Fênix Rodrigues Pedro | Desenvolvedor de Software',
            inLanguage: 'pt-BR',
            publisher: {
              '@id': personId,
            },
          },
        ],
      }),
    },
  ],
})
</script>