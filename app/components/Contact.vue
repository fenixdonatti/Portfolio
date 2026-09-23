<template>
    <section id="contato" class="section-block border-t border-[#d9dbd5]">
        <div class="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
                <p class="section-kicker">05 / Contato</p>
                <h2 class="section-title mt-5">Tem uma ideia?<br /><span class="text-[#ee7d62]">Vamos construir.</span></h2>
                <p class="section-intro">Estou aberto a conversar sobre tecnologia, projetos e novas oportunidades de colaboração.</p>
            </div>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <NuxtLink to="mailto:fenixdonatti@gmail.com" class="contact-card group block p-6">
                    <p class="section-kicker">Email</p>
                    <div class="mt-5 flex items-center justify-between gap-4">
                        <span class="break-all text-lg font-semibold">fenixdonatti@gmail.com</span>
                        <span class="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="https://www.linkedin.com/in/fenixrodrigues/" target="_blank" rel="noopener noreferrer" class="contact-card group block p-6">
                    <p class="section-kicker">LinkedIn</p>
                    <div class="mt-5 flex items-center justify-between gap-4">
                        <span class="text-lg font-semibold">Fênix Rodrigues Pedro</span>
                        <span class="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>