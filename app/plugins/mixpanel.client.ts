import mixpanel from 'mixpanel-browser'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const token = config.public.mixpanelToken

  if (!token) {
    return {
      provide: {
        mixpanel: null,
      },
    }
  }

  mixpanel.init(token, {
    track_pageview: false,
    persistence: 'localStorage',
  })

  let pageWasFullyRead = false

  const trackFullPageRead = () => {
    const pageBottom = window.scrollY + window.innerHeight
    const documentBottom = document.documentElement.scrollHeight

    if (!pageWasFullyRead && pageBottom >= documentBottom - 16) {
      pageWasFullyRead = true
      mixpanel.track('Page Fully Read', { path: window.location.pathname })
    }
  }

  const trackPageView = (path: string) => {
    pageWasFullyRead = false
    mixpanel.track('Page Viewed', { path })
    window.requestAnimationFrame(trackFullPageRead)
  }

  window.addEventListener('scroll', trackFullPageRead, { passive: true })
  trackPageView(window.location.pathname)
  nuxtApp.$router.afterEach((to) => trackPageView(to.fullPath))

  return {
    provide: {
      mixpanel,
    },
  }
})