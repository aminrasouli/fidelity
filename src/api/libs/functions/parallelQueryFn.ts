import axios, { AxiosResponse } from 'axios'
import { getFullEndpoint } from 'src/utils/url'
import main from 'src/config/main'

export const parallelQueryFn = async ({ queryKey }: { queryKey: any }): Promise<any> => {
  const endpoint = queryKey[0]
  const movieIds = queryKey[1]

  const promises: Promise<AxiosResponse<any, any>>[] = []
  movieIds.forEach((movieId: number) => {
    promises.push(
      axios.get(`${getFullEndpoint(endpoint)}/${movieId}`, {
        params: {
          api_key: main.API_KEY,
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
    throw new Error(errorsMessages)
  }

  return {
    results: (
      requests.filter((request) => request.status === 'fulfilled') as PromiseFulfilledResult<any>[]
    ).map((request) => request.value?.data),
  }
}
