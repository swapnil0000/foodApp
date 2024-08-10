import React, { useRef } from 'react';
import "./category.css";
import { Box, Typography, useMediaQuery } from '@mui/material';
import theme from '../theme/theme';
import { Menuimg } from '../utils/common';

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
                <Typography sx={{ textAlign: 'start', fontSize: '30px',fontWeight:'600',fontFamily:'montserrat',marginLeft:'20px',marginBottom:'10px' }}>Cateogry</Typography>
                <ul id="imgList" ref={imgListRef} style={{ display: 'flex', overflowX: 'scroll', listStyle: 'none', padding: 0, margin: 0 }}>
                {Menuimg.map((ele)=>(
                    <li>
                    <img className='img' src={ele.image} alt="Img 1" />
                    <Typography sx={{color:'white',fontSize:'18px',fontWeight:'600',fontFamily:'montserrat'}}>{ele.name}</Typography>
                    </li>
    ))}
                </ul>
                <div className="scroll-arrow" onClick={handleScrollLeft}>
                    &#8592;
                </div>
                <div className="scroll-arrow" onClick={handleScrollRight}>
                    &#8594;
                </div>
            </section>
        }

        </div>
    );
}

export default Category;
