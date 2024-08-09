import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Link } from "react-router-dom";

const Carousels = () => {
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))

    var imgList = document.getElementById('imgList');
    var scrollRight = document.getElementById('scroll-right');
    var scrollLeft = document.getElementById('scroll-left');
  



    const data = [
        {
            id: 1,
            img: "/assets/banner.png",
            link: "https://amzn.to/3WncEva"
        },]
    const handleClick = (link) => {
        window.open(link, "_blank");
    }

    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' , width:'100%',marginTop:isMobileView?"60px":"0px"}}>
                <div id="carouselExampleIndicators" className="carousel slide" >
                    <div className="carousel-inner">
                        {data.map((ele, index) => (
                            <Link to='/books' style={{ cursor: 'pointer' }} key={ele.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img style={{ maxWidth: '100%', height: isMobileView ? "auto" : "400px", cursor: 'pointer',objectFit:'cover' }} src={ele.img} alt="..." />
                            </Link>
                        ))}
                    </div>
                </div>
        </Box>

    );
}

export default Carousels;


// <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
// <span className="carousel-control-prev-icon" aria-hidden="true"></span>
// <span className="visually-hidden">Previous</span>
// </button>
// <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
// <span className="carousel-control-next-icon" aria-hidden="true"></span>
// <span className="visually-hidden">Next</span>
// </button>
// <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
// <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
// <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>