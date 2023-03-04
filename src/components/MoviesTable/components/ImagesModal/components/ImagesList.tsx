import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { useMovieImages } from 'src/api/movies'
import Box from '@mui/material/Box'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const imagesList = ({ movieId }: { movieId: number }) => {
  const { data } = useMovieImages({ movieId })

  const theme = useTheme()

  const greaterThanMid = useMediaQuery(theme.breakpoints.up('md'))
  const smallToMid = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const lessThanSmall = useMediaQuery(theme.breakpoints.down('sm'))

  const getImageListCols = () => (greaterThanMid ? 3 : smallToMid ? 2 : lessThanSmall ? 1 : 1)

  return (
    <>
      {data?.length === 0 && (
        <Box display='flex' justifyContent='center' alignItems='center' height='100%'>
          <h1>There is no images</h1>
        </Box>
      )}

      <ImageList sx={{ width: '65vw', height: '60vh' }} cols={getImageListCols()}>
        {data?.map((item: string, index: number) => (
          <ImageListItem key={index}>
            <img src={'/assets/img/cover.jpg'} alt={''} loading='lazy' />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}
export default imagesList
