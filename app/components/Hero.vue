<template>
  <section id="sobre" class="section-block border-b border-[#d9dbd5]">
    <div class="grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
      <div>
        <p class="section-kicker">Desenvolvedor de software · Porto Alegre, BR</p>
        <h1 class="display-font mt-7 max-w-4xl text-6xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-8xl">
          Código que<br /><span class="text-[#ee7d62]">resolve.</span>
        </h1>
        <p class="mt-8 max-w-2xl text-xl leading-relaxed text-[#6d716f] sm:text-2xl">
          Sou Fênix Rodrigues, estudante de Engenharia de Software e desenvolvedor focado em transformar problemas complexos em experiências digitais claras, rápidas e confiáveis.
        </p>
        <div class="mt-10 flex flex-wrap items-center gap-5">
          <NuxtLink to="#projetos" class="bg-[#121416] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#ee7d62]">Ver projetos <span aria-hidden="true">↘</span></NuxtLink>
          <NuxtLink to="#contato" class="outline-link py-2 text-sm uppercase tracking-[0.12em]">Vamos conversar</NuxtLink>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-sm lg:mb-2">
        <div class="absolute -right-3 -top-3 h-24 w-24 border-r border-t border-[#ee7d62]"></div>
        <div class="relative overflow-hidden bg-[#121416] p-3">
          <NuxtImg src="/images/abstract.png" alt="Imagem abstrata" class="h-72 w-full object-cover opacity-90" />
          <div class="flex items-center justify-between px-2 py-4 text-xs uppercase tracking-[0.12em] text-[#c7f36b]">
            <span>Disponível para oportunidades</span>
            <span class="h-2 w-2 rounded-full bg-[#c7f36b]"></span>
          </div>
        </div>
        <p class="mt-4 text-right text-sm text-[#6d716f]">01 / 05 — Sobre mim</p>
      </div>
    </div>

    <div class="mt-20 grid gap-3 border-t border-[#d9dbd5] pt-5 sm:grid-cols-4">
      <span class="text-xs font-bold uppercase tracking-[0.16em] text-[#6d716f]">Stack principal</span>
      <span class="display-font text-2xl font-semibold">Java</span>
      <span class="display-font text-2xl font-semibold">Spring Boot</span>
      <span class="display-font text-2xl font-semibold">TypeScript / Vue</span>
    </div>
  </section>
</template>