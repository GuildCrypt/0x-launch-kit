import fetchConfig from './fetchConfig.js'

let namePromise

export default function fetchName() {
  if (namePromise) {
    return namePromise
  }
  namePromise = fetchConfig().then((config) => {
    if (config.name) {
      return config.name
    } else {
      return document.location.hostname
    }
  })
  return namePromise
}
