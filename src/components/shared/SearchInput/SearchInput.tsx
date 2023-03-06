import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import { FormEvent, useEffect, useState } from 'react'
import { useDebounce, useSearchQueryParams } from 'src/hooks'
import { MoviesResponseResultTransformed, useMovies } from 'src/api/movies'
import { useSnackbar } from 'notistack'

const SearchInput = () => {
  const { searchQuery, submitSearchQuery } = useSearchQueryParams()

  const [inputValue, setInputValue] = useState<string>('')
  const debouncedInputValue = useDebounce<string>(inputValue, 450)

  const { enqueueSnackbar } = useSnackbar()

  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<readonly MoviesResponseResultTransformed[]>([])

  const isSubmittable: boolean =
    !!inputValue && inputValue !== searchQuery && inputValue.trim().length > 0

  const { data, isFetching } = useMovies({
    query: debouncedInputValue,
    enabled: isSubmittable,
    onError: (error: any) => {
      enqueueSnackbar(error.message, { variant: 'error' })
    },
  })

  const loading = open && isFetching

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  useEffect(() => {
    const topFilms = data?.items || []
    setOptions([...topFilms])
  }, [loading, data])

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (!isSubmittable) return
        submitSearchQuery(inputValue)
      }}
    >
      <Autocomplete
        id='search-movies'
        data-testid='search-movies'
        autoComplete
        sx={{ width: '35vw', minWidth: '350px' }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        isOptionEqualToValue={(option, value) => option.title.includes(value.title)}
        getOptionLabel={(option) => {
          return option?.year ? `${option?.title} (${option?.year})` : `${option?.title})`
        }}
        options={options}
        loading={loading}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue)
        }}
        onChange={(e, value) => {
          setOpen(false)
          submitSearchQuery((value as MoviesResponseResultTransformed).title)
        }}
        componentsProps={{
          popper: {
            componentsProps: {
              root: {
                'data-testid': 'search-movies-listbox',
              } as unknown as any,
            },
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Search for a movie...'
            InputProps={{
              ...params.InputProps,
              autoFocus: true,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color='inherit' size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </form>
  )
}
export default SearchInput
