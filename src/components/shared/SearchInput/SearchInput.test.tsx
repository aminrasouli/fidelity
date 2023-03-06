import { act, fireEvent, render, screen } from '@testing-library/react'
import SearchInput from './SearchInput'
import { BrowserRouter as Router } from 'react-router-dom'
import { faker } from '@faker-js/faker'
import { useMovies } from 'src/api/movies'
import { wait } from '@testing-library/user-event/dist/utils'
import { FC } from 'react'
import { SnackbarProvider } from 'notistack'

jest.mock('src/api/movies')

let length = 0
let searchValue = ''
let items: any[] = []

const SearchInputWithDependencies: FC = () => (
  <SnackbarProvider>
    <Router>
      <SearchInput />
    </Router>
  </SnackbarProvider>
)

describe('testing SearchInput', (): void => {
  beforeEach(() => {
    length = 5
    searchValue = faker.lorem.word()

    items = Array.from({ length }, (_, i) => ({
      id: faker.datatype.number(),
      title: `${searchValue} ${i}`,
      thumbnail: faker.image.imageUrl(),
      year: faker.datatype.number({ min: 1900, max: 2021 }),
      overview: faker.lorem.paragraph(),
      date: faker.date.past().toISOString(),
      language: 'en',
      voteAverage: faker.datatype.number({ min: 1, max: 10 }),
      voteCount: faker.datatype.number({ min: 1, max: 1000 }),
      popularity: faker.datatype.number({ min: 1, max: 1000 }),
      adult: faker.datatype.boolean(),
    }))
  })

  beforeEach(() => {
    ;(useMovies as jest.MockedFunction<any>).mockReturnValue({
      isFetching: false,
      data: { items },
    })
  })

  it('should render SearchInput', async (): Promise<void> => {
    const { getByTestId } = render(<SearchInputWithDependencies />)
    const searchInput = getByTestId('search-movies').querySelector('input') as HTMLInputElement

    searchInput.focus()

    fireEvent.change(searchInput, { target: { value: searchValue } })

    await wait()

    expect(searchInput).toBeInTheDocument()
    expect(searchInput.value).toBe(searchValue)
  })

  it('should not enter work when input is empty', async (): Promise<void> => {
    const { getByTestId } = render(<SearchInputWithDependencies />)
    const searchInput = getByTestId('search-movies').querySelector('input') as HTMLInputElement

    fireEvent.change(searchInput, { target: { value: '' } })
    await wait()

    fireEvent.keyDown(searchInput, { key: 'Enter' })
    await wait()

    expect(searchInput.value).toBe('')
  })

  it('should be render items in dropdown', async () => {
    const { getByTestId } = render(<SearchInputWithDependencies />)

    const searchInput = getByTestId('search-movies').querySelector('input') as HTMLInputElement

    searchInput.focus()

    act(() => {
      fireEvent.change(searchInput, { target: { value: searchValue } })
    })

    expect(searchInput.value).toBe(searchValue)

    const listUl = screen.getByTestId('search-movies-listbox')

    const listItems = listUl.querySelectorAll('li')

    expect(listUl).toMatchSnapshot()

    expect(listUl).toBeInTheDocument()

    items.forEach((item, i) => {
      expect(listItems[i]).toHaveTextContent(item.title)
      expect(listItems[i]).toHaveTextContent(item.year)
    })
  })
})
