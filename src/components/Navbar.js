import React from 'react'
import { AppBar, Box, Button, Input, InputAdornment, styled, Toolbar, Typography, useMediaQuery } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Location from './Location';
import theme from '../theme/theme';
const Navbar = () => {
    const isMobileView=useMediaQuery(theme.breakpoints.down('md'));
    const InputStlye = styled(Input)({
        placeholder: 'What would you like to eat',
        backgroundColor: '#F8F8F8',
        width: '40%',
        variant: 'outlined',
        borderRadius: '25px'
    })
    return (
        <AppBar position='sticky' sx={{ boxShadow: 'none' }}>
                <Toolbar sx={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <img src="/assets/logo.png" alt='logo' />
                    <InputStlye disableUnderline placeholder='What would you like to eat'
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        } />
                    <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px',cursor:'pointer'}}>
                      <RestaurantMenuIcon sx={{color:'black'}}/>
                      <Typography sx={{color:'black',fontWeight:'500',fontSize:'18px'}}>Menu</Typography>
                    </Box>

                    <Location/>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
                        <Button variant='outlined' sx={{color:'orange',border:'1px solid orange'}}>Login</Button>
                    </Box>
                </Toolbar>
            </AppBar>
    )
}

export default Navbar