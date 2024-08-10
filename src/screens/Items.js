import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import CartModel from '../components/CartModel';

export default function Items() {
    const [openModel,setOpenModel]=React.useState(false);
    const handleClick=()=>{
        setOpenModel(!openModel);
    }
    const mostRated=[
        {
            id:1,
            img:"/assets/Image/1.png"
        }
    ]
    return (
        <Container>
            <Card sx={{ maxWidth: 445 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="160"
                    image="/assets/Image/1.png"
                />
                <CardContent>
                    <Box sx={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Pizza
                        </Typography>
                        <Typography sx={{fontWeight:'600'}} variant='h5'>
                             ₹ 299
                        </Typography>

                    </Box>
                    <Typography variant="body2" color="text.secondary">
                    Capsicum with Onion Pizza [7 inches]+Tomato with Corn Pizza [7 inches]+
                    Paneer with Onion Pizza [7 inches]+Capsicum with Jalapeno Pizza [7 inches]
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleClick} variant='contained' sx={{width:'100%',backgroundColor:'#DA7455',color:'white'}}>Add to Cart</Button>
                </CardActions>
            </Card>
            <CartModel  open={openModel} setOpenModel={setOpenModel} />
        </Container>
    );
}