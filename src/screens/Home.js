import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Carousels from './Carousel'
import Category from './Category'
import Items from './Items'

const Home = () => {
  return (
    <Box>
      <Carousels/>
      <Category/>
      <Box sx={{display:"flex",flexDirection:'column'}}>
       <Typography sx={{fontSize:'30px',fontWeight:'600',fontFamily:'lato',marginLeft:'20px'}}>Most Rated Items</Typography>
      <Grid container spacing={1} sx={{ mt: 2 }}>
      {[...Array(9)].map((_, index) => (
        <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
          <Items />
        </Grid>
      ))}
    </Grid>
      </Box>
    </Box>
  )
}

export default Home