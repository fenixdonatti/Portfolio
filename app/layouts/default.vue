<template>
    <div class="min-h-screen overflow-hidden">
        <Header />
        <main>
            <slot />
        </main>
        <footer class="site-shell border-t border-[#d9dbd5] py-8 text-sm text-[#6d716f]">
            <div class="flex flex-col justify-between gap-3 sm:flex-row">
                <span>Fênix Rodrigues Pedro</span>
                <span>Construindo software com intenção.</span>
            </div>
        </footer>
    </div>
</template>