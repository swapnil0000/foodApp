import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box, Divider, FormControlLabel, Radio } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



export default function CartModel({ open, setOpenModel, price, img, name, value }) {

    const handleClickOpen = () => {
        setOpenModel(true);
    };
    const handleClose = () => {
        setOpenModel(false);
    };

    return (
        <React.Fragment>
            <Dialog className='dialog' maxWidth='400px'
                sx={{ borderRadius: '10px' }}
                open={open}
            >
                <DialogContent sx={{ width: '800px', height: '560px', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box >
                            <Box sx={{ gap: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' , justifyContent:'space-between'}}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                                    <Typography sx={{
                                        fontFamily: 'sans-serif',
                                        lineHeight: '5px',
                                        fontWeight:"600",
                                        fontSize: '20px'
                                    }}>{name}
                                    </Typography>
                                </Box>

                                <ShareIcon />
                            </Box>

                            <Box>
                                <img style={{ width: '280px', height: '200px', marginTop: "30px",borderRadius:'10px' }} src={img} alt='burger' />
                            </Box>

                            <Box>
                                <Typography sx={{ marginTop: '10px', fontFamily: 'sans-serif' }}>{value}</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 30, alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: 700, fontSize:'20px' }}>₹ {price}</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'white', width: '100px', height: '30px', marginTop: '12px', alignItems: 'center',justifyItems:'center', borderRadius: '5px', justifyContent: 'space-around' ,backgroundColor:'orange'}}>
                                    <AddIcon sx={{cursor:'pointer'}}/>
                                    <Divider orientation='vertical' />
                                    <span style={{fontWeight:'800',fontFamily:'lato'}}>0</span>
                                    <Divider orientation='vertical' />
                                    <RemoveIcon sx={{cursor:'pointer'}}/>
                                </Box>
                            </Box>
                        </Box>


                        <Box sx={{ height: '500px', margin: '10px' }}>
                            <Divider orientation='vertical' />
                        </Box>


                        <Box>

                            <Box sx={{ marginLeft: '300px' }}>
                                <IconButton onClick={handleClose}>
                                    <CancelIcon />
                                </IconButton>
                            </Box>

                        <Box>
                            <Typography sx={{ fontSize: '17px',fontWeight:'600' }}>Select Size</Typography>                         
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <FormControlLabel value="female" control={<Radio />} label="Mini Meal" />
                                <Typography>₹ 10</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
                                <FormControlLabel value="female" control={<Radio />} label="All-in-1 Meal" />
                                <Typography>₹ 10</Typography>
                             </Box>
                        </Box>

                        <Box>
                            <Typography sx={{ fontSize: '17px',fontWeight:'600',marginTop:'10px' }}>Select Base</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <FormControlLabel value="female" control={<Radio />} label="Mini Meal" />
                                <Typography>₹ 10</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <FormControlLabel value="female" control={<Radio />} label="Mini Meal" />
                                <Typography>₹ 10</Typography>    
                            </Box>
                        </Box>    

                        <Box>
                            <Typography sx={{fontSize: '17px',fontWeight:'600',marginTop:'10px',}}>Select Coldrinks</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems:'center',justifyContent:'space-between'  }}>
                                <FormControlLabel value="female" control={<Radio />} label="Coca Cola" />
                                <Typography>₹ 30</Typography>
                             </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
                                <FormControlLabel value="female" control={<Radio />} label="Coca Cola" />
                                <Typography>₹ 20</Typography>
                            </Box>


                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
                               <FormControlLabel value="female" control={<Radio />} label="Coca Cola" />
                               <Typography>₹ 10</Typography>
                            </Box>
                        </Box>


                            <Button variant='contained' sx={{ textDecorationStyle: 'dashed', width: '100%', marginTop: '30px',backgroundColor:'orange' }}>Checkout</Button>

                        </Box>
                    </Box>
                </DialogContent>

            </Dialog>
        </React.Fragment>
    );
}