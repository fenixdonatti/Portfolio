<template>
    <div>
        <div class="flex flex-col items-center mb-10">
            <h1 class="text-6xl font-bold mb-5">projetos</h1>
            <p class="text-3xl text-center">Conheça alguns dos projetos em que transformei ideias em experiências digitais funcionais e acessíveis.</p>
        </div>
        <div class="flex justify-around flex-col gap-4 items-center lg:items-start lg:flex-row">
            <NuxtLink to="https://lomed.com.br/" target="_blank" rel="noopener noreferrer">
                <UCard class="max-w-md">
                    <NuxtImg src="/images/lomed.png" alt="Projeto Lomed" class="mb-5" />
                    <h2 class="text-3xl">Lomed</h2>
                    <p class="text-xl">Site institucional desenvolvido para apresentar a Lomed e seus serviços de forma clara e profissional.</p>
                </UCard>
            </NuxtLink>

            <NuxtLink to="https://kardape.com.br/" target="_blank" rel="noopener noreferrer">
                <UCard class="max-w-md">
                    <NuxtImg src="/images/kardape.png" alt="Projeto Kardape" class="mb-5" />
                    <h2 class="text-3xl">Kardape</h2>
                    <p class="text-xl">Plataforma criada para facilitar a consulta e a organização de cardápios digitais.</p>
                </UCard>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style></style>