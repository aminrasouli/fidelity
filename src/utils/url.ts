import config from 'src/config'

export const mergeEndpoint = (...urls: string[]) => urls.join('')

export const getFullEndpoint = (endpoint: string) => {
  return mergeEndpoint(config.BASE_URL, endpoint)
}
