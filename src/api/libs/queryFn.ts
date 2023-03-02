import axios from 'axios'
import { MoviesResponse } from '../movies'

const baseUrl = `${process.env.REACT_APP_TMDB_API_URL}`
const apiKey = `${process.env.REACT_APP_TMDB_API_KEY}`

const getFullEndpoint = (endpoint: string) => `${baseUrl}${endpoint}`

export const queryFn = async ({ queryKey }: { queryKey: any }) => {
  const endpoint = queryKey[0]
  const params = queryKey[1]

  const { data } = await axios.get(getFullEndpoint(endpoint), {
    params: {
      api_key: apiKey,
      ...params,
    },
  })
  return data
}

export const parallelQueryFn = async ({ queryKey }: { queryKey: any }): Promise<MoviesResponse> => {
  const endpoint = queryKey[0]
  const movieIds = queryKey[1]

  const promises: any = []
  movieIds.forEach((movieId: number) => {
    promises.push(
      axios.get(`${getFullEndpoint(endpoint)}/${movieId}`, {
        params: {
          api_key: apiKey,
        },
      }),
    )
  })
  return {
    results: (await Promise.all(promises)).map(({ data }) => data),
  }
}
