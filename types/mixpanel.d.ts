import type Mixpanel from 'mixpanel-browser'

declare module '#app' {
  interface NuxtApp {
    $mixpanel: Mixpanel | null
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $mixpanel: Mixpanel | null
  }
}

export {}