import main from 'src/config/main'

export const mergeEndpoint = (...urls: string[]) => urls.join('')

export const getFullEndpoint = (endpoint: string) => {
  return mergeEndpoint(main.BASE_URL, endpoint)
}
