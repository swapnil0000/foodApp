import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider, Grid, useMediaQuery } from '@mui/material';
import CartModel from '../components/CartModel';
import { orderData } from '../utils/common';
import theme from '../theme/theme';

export default function Items() {
    const [openModel, setOpenModel] = React.useState(false);
    const handleClick = () => {
        setOpenModel(!openModel);
    };
    const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box>
            <Box sx={{ display: "flex", flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '30px', fontWeight: '600', fontFamily: 'lato', marginLeft:isMobileView?"5px":"25px",marginTop:'1px',color:'white' }}>
                    Most Rated Items
                </Typography>
                <Grid container spacing={3}>
                    {orderData.map((ele) => (
                        <Grid item lg={4} md={4} sm={6} xs={12} xl={2} key={ele.id} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Card sx={{ maxWidth:isMobileView?350:395}}>
                                <CardMedia
                                    component="img"
                                    alt={ele.name}
                                    height={isMobileView?"150":"180"}
                                    image={ele.img}
                                />
                                <CardContent>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Typography gutterBottom variant="h5">
                                            {ele.name}
                                        </Typography>
                                        <Typography sx={{ fontWeight: '600' }} variant='h5'>
                                            ₹ {ele.price}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {ele.value}
                                    </Typography>
                                </CardContent>
                                <Divider sx={{width:'100%'}} orientation='horizontal'/>
                                <CardActions>
                                    <Button onClick={handleClick} variant='contained' sx={{ width: '40%', backgroundColor: '#DA7455', color: 'white' }}>
                                        Add to Cart
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <CartModel open={openModel} setOpenModel={setOpenModel} />
        </Box>
    );
}
