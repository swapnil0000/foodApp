import React from 'react'
import styled from '@emotion/styled'
import { Box, Container, Typography } from '@mui/material'
import { Link, } from 'react-router-dom'


const Location = () => {

    const Image = styled('img')({
        width: '25px',
        alignItems: 'center',
        justifyContent: 'center',
        height: "auto",
        cursor: 'pointer'
    })
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Link to="/location" >
                <Image src="/assets/location.png" alt='Location' />
            </Link>
            <Typography sx={{ color: 'black', fontFamily: 'revert', fontSize: '18px', fontWeight: "500" }}>Prayagraj</Typography>
        </Box>
    )
}

export default Location