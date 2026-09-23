<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
const siteUrl = (config.public.siteUrl || useRequestURL().origin).replace(/\/$/, '')
const personId = `${siteUrl}/#person`

useHead({
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

