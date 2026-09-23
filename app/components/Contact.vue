<template>
    <div>
        <div class="flex flex-col items-center mb-10">
            <h1 class="text-6xl font-bold">contato</h1>
            <p class="text-3xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur
                aut cum iusto tenetur
                reiciendis eligendi.</p>
        </div>
        <div class="flex justify-around">
            <NuxtLink to="#" target="_blank" rel="noopener noreferrer">
                <UCard class="max-w-md">
                    <h2 class="text-3xl">Email</h2>
                    <p class="text-xl">lorem@ipsum.com</p>
                    <p class="text-lg">Lorem ipsum dolor sit amet</p>
                </UCard>
            </NuxtLink>

            <NuxtLink to="#" target="_blank" rel="noopener noreferrer">
                <UCard class="max-w-md">
                    <h2 class="text-3xl">Telefone</h2>
                    <p class="text-xl">(51) 99999-9999</p>
                    <p class="text-lg">Lorem ipsum dolor sit amet</p>
                </UCard>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style></style>