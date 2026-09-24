<template>
    <header class="site-shell sticky top-0 z-20 flex items-center justify-between border-b border-[#d9dbd5] bg-[#f3f1eb]/90 py-5 backdrop-blur-md">
        <NuxtLink to="#sobre" class="display-font text-xl font-semibold tracking-tight" @click="closeMenu">
            FR<span class="text-[#ee7d62]">.</span>
        </NuxtLink>

        <div class="flex items-center gap-5">
            <span class="hidden text-xs font-bold uppercase tracking-[0.16em] text-[#6d716f] sm:inline">Portfólio · 2026</span>
            <div class="flex justify-end md:hidden">
                <button
                    type="button"
                    class="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9dbd5] bg-white/60 text-lg text-[#121416] transition-colors hover:border-[#121416]"
                    :aria-label="isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'"
                    :aria-expanded="isMenuOpen"
                    @click="isMenuOpen = !isMenuOpen"
                >
                    {{ isMenuOpen ? '✕' : '☰' }}
                </button>
            </div>

            <nav :class="[isMenuOpen ? 'absolute left-0 top-full flex w-full border-b border-[#d9dbd5] bg-[#f3f1eb] p-5' : 'hidden', 'flex-col gap-5 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0']">
                <NuxtLink class="text-sm font-bold uppercase tracking-[0.12em] text-[#6d716f] transition-colors hover:text-[#121416]" to="#projetos" @click="closeMenu">Projetos</NuxtLink>
                <NuxtLink class="text-sm font-bold uppercase tracking-[0.12em] text-[#6d716f] transition-colors hover:text-[#121416]" to="#experiencia" @click="closeMenu">Experiência</NuxtLink>
                <NuxtLink class="text-sm font-bold uppercase tracking-[0.12em] text-[#6d716f] transition-colors hover:text-[#121416]" to="#escolaridade" @click="closeMenu">Formação</NuxtLink>
                <NuxtLink class="bg-[#121416] px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#ee7d62]" to="#contato" @click="closeMenu">Contato <span aria-hidden="true">↗</span></NuxtLink>
            </nav>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function closeMenu() {
    isMenuOpen.value = false
}
</script>

<style></style>