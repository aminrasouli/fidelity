import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import { FormEvent, useEffect, useState } from 'react'
import { useDebounce, useSearchQueryParams } from '../../hooks'
import { MoviesResponseResultTransformed, useMovies } from '../../api/movies'

export default function SearchInput() {
  const { searchQuery, submitSearchQuery } = useSearchQueryParams()

  const [inputValue, setInputValue] = useState('')
  const debouncedInputValue: string = useDebounce(inputValue, 450)

  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<readonly MoviesResponseResultTransformed[]>([])
  const isSubmittable: boolean =
    !!inputValue && inputValue !== searchQuery && inputValue.trim().length > 0

  const { data, isFetching } = useMovies({
    query: debouncedInputValue,
  })

  const loading = open && isFetching

  useEffect(() => {
    const topFilms = data?.items || []
    setOptions([...topFilms])
  }, [loading, data])

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open, debouncedInputValue])

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (!isSubmittable) return
        submitSearchQuery(inputValue)
      }}
    >
      <Autocomplete
        id='asynchronous-demo'
        sx={{ width: '35vw', minWidth: '350px' }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => {
          return option?.year ? `${option?.title} (${option?.year})` : `${option?.title})`
        }}
        options={options}
        loading={loading}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue)
        }}
        onChange={(e, value) => submitSearchQuery((value as MoviesResponseResultTransformed).title)}
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
