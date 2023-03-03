import axios, { AxiosError } from 'axios'
import { getFullEndpoint } from 'src/utils/url'
import config from 'src/config'

export const queryFn = async ({ queryKey }: { queryKey: any }) => {
  const endpoint = queryKey[0]
  const params = queryKey[1]

  try {
    const { data } = await axios.get(getFullEndpoint(endpoint), {
      timeout: 5 * 1000,
      params: {
        api_key: config.API_KEY,
        ...params,
      },
    })
    return data
  } catch (error: unknown) {
    throw new Error((error as AxiosError).message)
  }
}
