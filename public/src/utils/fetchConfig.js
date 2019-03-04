let configPromise

export default function fetchConfig() {
  if (configPromise) {
    return configPromise
  }
  configPromise = fetch('/api/bookzaar/v0/config').then((response) => {
    return response.json()
  })
  return configPromise
}
