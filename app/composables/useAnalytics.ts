import type { Dict } from 'mixpanel-browser'

export const useAnalytics = () => {
  const { $mixpanel } = useNuxtApp()

  return {
    track(event: string, properties?: Dict) {
      $mixpanel?.track(event, properties)
    },
    identify(id: string, properties?: Dict) {
      $mixpanel?.identify(id)

      if (properties) {
        $mixpanel?.people.set(properties)
      }
    },
  }
}