import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { useMovieImages } from '../../api/movies/movies'
import Box from '@mui/material/Box'

export default function imagesList({ movieId }: { movieId: number }) {
  const { data } = useMovieImages({ movieId })

  console.log(data)

  return (
    <>
      {data?.length === 0 && (
        <Box display='flex' justifyContent='center' alignItems='center' height='100%'>
          <h1>There is no images</h1>
        </Box>
      )}

      <ImageList sx={{ width: '65vw', height: '60vh' }} cols={3}>
        {data?.map((item: string, index: number) => (
          <ImageListItem key={index}>
            <img
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={''}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}
