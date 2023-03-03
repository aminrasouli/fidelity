import axios, { AxiosResponse } from 'axios'
import { getFullEndpoint } from 'src/utils/url'
import config from 'src/config'

export const parallelQueryFn = async ({ queryKey }: { queryKey: any }): Promise<any> => {
  const endpoint = queryKey[0]
  const movieIds = queryKey[1]

  const promises: Promise<AxiosResponse<any, any>>[] = []
  movieIds.forEach((movieId: number) => {
    promises.push(
      axios.get(`${getFullEndpoint(endpoint)}/${movieId}`, {
        params: {
          api_key: config.API_KEY,
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
