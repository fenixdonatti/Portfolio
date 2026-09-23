<template>
    <div>
        <div class="flex flex-col items-center mb-10">
            <h1 class="text-6xl font-bold mb-5">escolaridade</h1>
            <p class="text-3xl text-center">Minha formação reúne fundamentos de software, prática em tecnologia e uma busca constante por novos conhecimentos.</p>
        </div>
        <div class="flex gap-10 flex-col">
            <div class="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
                <div>
                    <h2 class="text-4xl font-bold">PUCRS</h2>
                    <p class="text-2xl">Bacharelado em Engenharia de Software</p>
                    <p class="text-xl">06/2025 - presente</p>
                </div>

                <NuxtImg src="/images/pucrs.png" class="w-md h-58 lg:w-lg lg:h-80 rounded-4xl object-cover" />
            </div>

            <div class="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
                <div>
                    <h2 class="text-4xl font-bold">Senac Distrito Criativo</h2>
                    <p class="text-2xl">Técnico em Informática para a Internet</p>
                    <p class="text-xl">2021 - 2023</p>
                </div>

                <NuxtImg src="/images/senac.png" class="w-md h-58 lg:w-lg lg:h-80 rounded-4xl object-cover" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style></style>