<template>
    <div>
        <div class="flex flex-col items-center mb-10">
            <h1 class="text-6xl font-bold">Projetos</h1>
            <p class="text-3xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur
                aut cum iusto tenetur
                reiciendis eligendi.</p>
        </div>
        <div class="flex justify-around">
            <NuxtLink to="https://lomed.com.br/" target="_blank" rel="noopener noreferrer">
                <UCard class="max-w-md">
                    <NuxtImg src="/images/lomed.png" alt="Projeto Lomed" class="mb-5" />
                    <h2 class="text-3xl">Lomed</h2>
                    <p class="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </UCard>
            </NuxtLink>

            <NuxtLink to="https://kardape.com.br/" target="_blank" rel="noopener noreferrer">
                <UCard class="max-w-md">
                    <NuxtImg src="/images/kardape.png" alt="Projeto Kardape" class="mb-5" />
                    <h2 class="text-3xl">Kardape</h2>
                    <p class="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </UCard>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style></style>