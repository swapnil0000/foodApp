import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Divider, Grid, useMediaQuery } from '@mui/material';
import CartModel from '../components/CartModel';
import { fastest, orderData } from '../utils/common';
import theme from '../theme/theme';

export default function Fastest() {
    const [openModel,setOpenModel]=React.useState(false);
    const handleClick=()=>{
        setOpenModel(!openModel);
    }
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Box>
        <Box sx={{display:"flex",flexDirection:'column',marginTop:'50px',alignItems:'flex-start'}}>
        <Typography sx={{fontSize:'30px',fontWeight:'600',fontFamily:'lato',marginLeft:'25px',color:'whitesmoke'}}>Fastest Delivery</Typography>
       <Grid container spacing={3}  >
       {fastest.map((ele) => (
         <Grid item lg={4} md={4} sm={6} xs={12} xl={2} key={ele.id} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
         <Card sx={{ maxWidth: 395,boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}>
         <CardMedia
             component="img"
             alt="green iguana"
             height="180"
             image={ele.img}
         />
         <CardContent>
             <Box sx={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                 <Typography  variant="h5" >
                     {ele.name}
                 </Typography>
                 <Typography sx={{fontWeight:'600'}} variant='h5'>
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
            <CartModel  open={openModel} setOpenModel={setOpenModel} />
        </Box>
    );
}