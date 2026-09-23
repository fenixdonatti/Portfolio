<template>
    <section id="escolaridade" class="section-block border-t border-[#d9dbd5]">
        <div class="section-heading">
            <p class="section-kicker">04 / Formação</p>
            <h2 class="section-title">Sempre em<br />movimento.</h2>
            <p class="section-intro">Minha formação reúne fundamentos de software, prática em tecnologia e uma busca constante por novos conhecimentos.</p>
        </div>
        <div class="mt-14 grid gap-5">
            <div class="education-row group grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
                <div>
                    <p class="section-kicker">Em andamento</p>
                    <h3 class="display-font mt-2 text-3xl font-semibold">Pontifícia Universidade Católica do Rio Grande do Sul</h3>
                    <p class="mt-2 text-lg text-[#6d716f]">Bacharelado em Engenharia de Software</p>
                    <p class="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-[#6d716f]">06/2025 — presente</p>
                </div>
                <NuxtImg src="/images/pucrs.png" alt="Campus da PUCRS" class="h-48 w-full object-cover grayscale transition duration-300 group-hover:grayscale-0 sm:h-28 sm:w-52" />
            </div>

            <div class="education-row group grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
                <div>
                    <p class="section-kicker">Concluído</p>
                    <h3 class="display-font mt-2 text-3xl font-semibold">Senac Distrito Criativo</h3>
                    <p class="mt-2 text-lg text-[#6d716f]">Técnico em Informática para a Internet</p>
                    <p class="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-[#6d716f]">2021 — 2023</p>
                </div>
                <NuxtImg src="/images/senac.png" alt="Senac Distrito Criativo" class="h-48 w-full object-cover sm:h-28 sm:w-52 grayscale transition duration-300 group-hover:grayscale-0" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
</script>

<style></style>