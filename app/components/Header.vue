<template>
    <UContainer>
        <header class="mb-20 p-3">
            <div class="flex justify-end md:hidden">
                <UButton
                    :icon="isMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
                    color="neutral"
                    variant="ghost"
                    :aria-label="isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'"
                    :aria-expanded="isMenuOpen"
                    @click="isMenuOpen = !isMenuOpen"
                />
            </div>

            <nav :class="[isMenuOpen ? 'flex' : 'hidden', 'flex-col items-center gap-5 pt-5 md:flex md:flex-row md:items-center md:justify-between md:pt-0']">
                <NuxtLink class="text-2xl font-bold" to="#sobre" @click="closeMenu">Sobre</NuxtLink>
                <NuxtLink class="text-2xl font-bold" to="#projetos" @click="closeMenu">Projetos</NuxtLink>
                <NuxtLink class="text-2xl font-bold" to="#experiencia" @click="closeMenu">Experiência</NuxtLink>
                <NuxtLink class="text-2xl font-bold" to="#escolaridade" @click="closeMenu">Formação</NuxtLink>
                <NuxtLink class="text-2xl font-bold" to="#contato" @click="closeMenu">Contato</NuxtLink>
            </nav>
        </header>
    </UContainer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function closeMenu() {
    isMenuOpen.value = false
}
</script>

<style></style>