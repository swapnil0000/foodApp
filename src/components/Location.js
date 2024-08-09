import React from 'react'
import styled from '@emotion/styled'
import { Box, Button, Container, Typography } from '@mui/material'
import { Link, } from 'react-router-dom'


const Location = () => {

    const Image = styled('img')({
       
    })
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',flexDirection:'row' }}>
            <Link to="/location" >
                <Image src="/assets/location.png" alt='Location' />
            </Link>
            <Typography sx={{ color: 'black', fontFamily: 'sans-serif', fontSize: '15px', }}>Prayagraj, Kalindipuram</Typography>
        </Box>
    )
}

export default Location