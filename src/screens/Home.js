import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Carousels from './Carousel'
import Category from './Category'
import Items from './MostRated'
import { orderData } from '../utils/common'
import Fastest from './Fastest'
import Combos from './Combos'
import Sweets from './Sweets'
import Add from './Add'

const Home = () => {
  return (
    <Box sx={{backgroundColor:'black'}}>
      <Carousels/>
      <Category/>
      <Add/>
      <Items/>
      <Fastest/>
      <Combos/>
      <Sweets/>
    </Box>
  )
}

export default Home