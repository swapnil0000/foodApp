import React, { useRef } from 'react';
import "./category.css";
import { Box, Typography, useMediaQuery } from '@mui/material';
import theme from '../theme/theme';

const Category = () => {
    // Create references for the imgList, scrollRight, and scrollLeft elements
    const imgListRef = useRef(null);

    // Function to handle scrolling to the right
    const handleScrollRight = () => {
        if (imgListRef.current) {
            imgListRef.current.scrollBy(650, 0);
        }
    };

    // Function to handle scrolling to the left
    const handleScrollLeft = () => {
        if (imgListRef.current) {
            imgListRef.current.scrollBy(-650, 0);
        }
    };

    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <div>
     {!isMobileView && 
            <section>
                <Typography sx={{ textAlign: 'left', margin: '10px', fontSize: '25px',fontWeight:'600' }}>Cateogry</Typography>
                <ul id="imgList" ref={imgListRef} style={{ display: 'flex', overflowX: 'scroll', listStyle: 'none', padding: 0, margin: 0 }}>
                    <li>
                    <img className='img' src="/assets/Image/MenuImage/pizza.png" alt="Img 1" />
                    <Typography sx={{color:'white',fontSize:'18px',fontWeight:'600',fontFamily:'montserrat'}}>Pizza</Typography>
                    </li>
                    <li>
                    <img className='img' src="/assets/Image/MenuImage/biryani.png" alt="Img 2" />
                    <Typography  sx={{color:'white',fontSize:'18px',fontWeight:'600'}}>Biryani</Typography>
                    </li>
                    <li>
                    <img className='img' src="/assets/Image/MenuImage/burger.png" alt="Img 3" />
                    <Typography  sx={{color:'white',fontSize:'18px',fontWeight:'600'}}>Burger</Typography>
                    </li>
                    <li>
                    <img className='img' src="/assets/Image/MenuImage/roll.png" alt="Img 4" />
                    <Typography  sx={{color:'white',fontSize:'18px',fontWeight:'600'}}>Roll</Typography>
                    </li>
                    <li>
                    <img className='img' src="/assets/Image/MenuImage/south.png" alt="Img 5" />
                    <Typography  sx={{color:'white',fontSize:'18px',fontWeight:'600'}}>South Indian</Typography>
                    </li>
                    <li>
                    <img className='img' src="/assets/Image/MenuImage/italian.png" alt="Img 6" />
                    <Typography  sx={{color:'white',fontSize:'18px',fontWeight:'600'}}>Italian</Typography>
                    </li>
                    <li>
                    <img className='img' src="/assets/Image/MenuImage/chinease.png" alt="Img 7" />
                    <Typography  sx={{color:'white',fontSize:'18px',fontWeight:'600'}}>Chinese</Typography>
                    </li>
                </ul>
                <div className="scroll-arrow" onClick={handleScrollLeft}>
                    &#8592;
                </div>
                <div className="scroll-arrow" onClick={handleScrollRight}>
                    &#8594;
                </div>
            </section>
        }
        <Box>
         
        </Box>
        </div>
    );
}

export default Category;
