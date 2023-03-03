import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import routes from 'src/routes'

const useSearchQueryParams = (): {
  searchQuery: string
  submitSearchQuery: (value: string) => void
  hasSearchQuery: boolean
} => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [queryParams, setQueryParams] = useSearchParams()

  const paramKey = 'q'

  const searchPathname = routes.search.path

  const value = queryParams.get(paramKey) || ''
  const setValue = (value: string): void =>
    pathname === searchPathname
      ? setQueryParams({ [paramKey]: value.trim() })
      : navigate(`${searchPathname}?${paramKey}=${value.trim()}`)

  return {
    searchQuery: value,
    submitSearchQuery: setValue,
    hasSearchQuery: value.length > 0,
  }
}

export default useSearchQueryParams
