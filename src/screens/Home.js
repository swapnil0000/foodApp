import { Box } from '@mui/material'
import React from 'react'
import Carousels from './Carousel'
import Category from './Category'

const Home = () => {
  return (
    <Box>
      <Carousels/>
      <Category/>
    </Box>
  )
}

export default Home