<template>
    <div id="contato" class="px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col items-center mb-12">
            <h1 class="text-5xl font-bold text-center md:text-6xl">Contato</h1>
            <p class="mt-4 text-xl md:text-2xl text-center">
                Vamos conversar sobre tecnologia, projetos e novas oportunidades de colaboração.
            </p>
        </div>
        <div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            <NuxtLink to="#" target="_blank" rel="noopener noreferrer" class="block">
                <UCard class="h-full flex flex-col items-center p-6 text-center rounded-lg">
                    <h2 class="text-2xl font-semibold mb-3">Email</h2>
                    <p class="text-lg mb-2">fenixdonatti@gmail.com</p>
                    <p class="text-sm flex-1">Entre em contato por e-mail para falar sobre um projeto ou oportunidade.</p>
                </UCard>
            </NuxtLink>

            <NuxtLink to="https://www.linkedin.com/in/fenixrodrigues/" target="_blank" rel="noopener noreferrer" class="block">
                <UCard class="h-full flex flex-col items-center p-6 text-center rounded-lg">
                    <h2 class="text-2xl font-semibold mb-3">LinkedIn</h2>
                    <p class="text-lg mb-2">Fênix Rodrigues Pedro</p>
                    <p class="text-sm flex-1">Acompanhe minha trajetória profissional e conecte-se comigo.</p>
                </UCard>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style>
</style>