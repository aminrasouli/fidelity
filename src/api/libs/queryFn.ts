import axios, { AxiosError, AxiosResponse } from 'axios'

const baseUrl = `${process.env.REACT_APP_TMDB_API_URL}`
const apiKey = `${process.env.REACT_APP_TMDB_API_KEY}`

const getFullEndpoint = (endpoint: string) => `${baseUrl}${endpoint}`

export const queryFn = async ({ queryKey }: { queryKey: any }) => {
  const endpoint = queryKey[0]
  const params = queryKey[1]

  try {
    const { data } = await axios.get(getFullEndpoint(endpoint), {
      timeout: 5 * 1000,
      params: {
        api_key: apiKey,
        ...params,
      },
    })
    return data
  } catch (error: unknown) {
    throw new Error((error as AxiosError).message)
  }
}

export const parallelQueryFn = async ({ queryKey }: { queryKey: any }): Promise<any> => {
  const endpoint = queryKey[0]
  const movieIds = queryKey[1]

  const promises: Promise<AxiosResponse<any, any>>[] = []
  movieIds.forEach((movieId: number) => {
    promises.push(
      axios.get(`${getFullEndpoint(endpoint)}/${movieId}`, {
        params: {
          api_key: apiKey,
        },
      }),
    )
  })

  const requests = await Promise.allSettled(promises)

  const errors = requests.filter(
    (request) => request.status === 'rejected',
  ) as PromiseRejectedResult[]

  if (errors.length) {
    const errorsMessages = errors
      ?.map((request: PromiseRejectedResult) => request?.reason?.message)
      ?.filter((message, index, self) => self.indexOf(message) === index)
      .join(', ')
    console.log('wtf', errorsMessages)
    throw new Error(errorsMessages)
  }

  return {
    results: (
      requests.filter((request) => request.status === 'fulfilled') as PromiseFulfilledResult<any>[]
    ).map((request) => request.value?.data),
  }
}
