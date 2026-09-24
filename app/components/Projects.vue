<template>
    <section id="projetos" class="section-block">
        <div class="section-heading">
            <p class="section-kicker">02 / Trabalho selecionado</p>
            <h2 class="section-title">Projetos que<br />saem do papel.</h2>
            <p class="section-intro">Produtos digitais pensados para serem úteis no dia a dia, com interfaces acessíveis e uma base técnica preparada para crescer.</p>
        </div>
        <div class="mt-14 grid gap-7 lg:grid-cols-2">
            <NuxtLink to="https://lomed.com.br/" target="_blank" rel="noopener noreferrer" class="project-card group block p-3" @click="trackProject('Lomed')">
                <NuxtImg
                    src="/images/lomed.webp"
                    alt="Projeto Lomed"
                    width="1400"
                    height="900"
                    sizes="(max-width: 768px) 100vw, 560px"
                    format="webp"
                    quality="92"
                    class="h-64 w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                />
                <div class="p-5">
                    <div class="flex items-start justify-between gap-5">
                        <div>
                            <p class="section-kicker">Institucional · 01</p>
                            <h3 class="display-font mt-3 text-3xl font-semibold">Lomed</h3>
                        </div>
                        <span class="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                    </div>
                    <p class="mt-4 leading-relaxed text-[#6d716f]">Site institucional desenvolvido para apresentar a Lomed e seus serviços de forma clara e profissional.</p>
                    <p class="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#6d716f]">Web design · Desenvolvimento</p>
                </div>
            </NuxtLink>

            <NuxtLink to="https://kardape.com.br/" target="_blank" rel="noopener noreferrer" class="project-card group block p-3" @click="trackProject('Kardape')">
                <NuxtImg
                    src="/images/kardape.webp"
                    alt="Projeto Kardape"
                    width="1400"
                    height="900"
                    sizes="(max-width: 768px) 100vw, 560px"
                    format="webp"
                    quality="92"
                    class="h-64 w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                />
                <div class="p-5">
                    <div class="flex items-start justify-between gap-5">
                        <div>
                            <p class="section-kicker">Produto digital · 02</p>
                            <h3 class="display-font mt-3 text-3xl font-semibold">Kardape</h3>
                        </div>
                        <span class="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                    </div>
                    <p class="mt-4 leading-relaxed text-[#6d716f]">Plataforma criada para facilitar a consulta e a organização de cardápios digitais.</p>
                    <p class="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#6d716f]">Produto · Experiência do usuário</p>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useAnalytics } from '../composables/useAnalytics';

const { track } = useAnalytics()

const trackProject = (project: string) => {
    track('Project Clicked', { project })
}
</script>

<style></style>