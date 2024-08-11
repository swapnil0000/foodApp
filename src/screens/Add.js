import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../styles/add.css';  // Ensure you have the necessary styles here
import { Box, useMediaQuery } from '@mui/material';
import theme from '../theme/theme';

const Add = () => {
  useEffect(() => {
    const options = {
      opacityIn: [0, 1],
      scaleIn: [0.2, 1],
      scaleOut: 1,
      durationIn: 1200,
      durationOut: 600,
      delay: 1000,
      easing: "easeInExpo",
    };

    anime.timeline({ loop: true })
      .add({
        targets: '.text-animation .left',
        opacity: options.opacityIn,
        translateX: ['-100%', '0%'],
        duration: options.durationIn,
        easing: options.easing,
      })
      .add({
        targets: '.text-animation .left',
        opacity: 0,
        translateX: ['0%', '-100%'],
        duration: options.durationOut,
        easing: options.easing,
        delay: options.delay,
      })
      .add({
        targets: '.text-animation .right',
        opacity: options.opacityIn,
        translateX: ['100%', '0%'],
        duration: options.durationIn,
        easing: options.easing,
      })
      .add({
        targets: '.text-animation .right',
        opacity: 0,
        translateX: ['0%', '100%'],
        duration: options.durationOut,
        easing: options.easing,
        delay: options.delay,
      })
      .add({
        targets: '.central-text'
      });
  }, []);
  const isMobileView=useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ width: '100%', height: '250px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <span style={{ fontSize:isMobileView?"50px":"110px", color: '#ff9c79', fontWeight: '700', fontFamily: 'lato', position: 'relative', zIndex: 2 }}>
        देसी MEAL
      </span>
      <div className="text-animation" style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 50px' }}>
      <span className="left" style={{ fontSize: '30px', color: 'orange', fontWeight: '600', position: 'relative', left: '0%',top:'-20%' }}>Pizza   </span>
        <span className="left" style={{ fontSize: '30px', color: 'grey', fontWeight: '600', position: 'relative', left: '2%',top:'5%' }}>Chicken</span>
        <span className="left" style={{ fontSize: '30px', color: '#666', fontWeight: '600', position: 'relative', left: '-20%',top:'30%' }}>Awseome</span>
        <span className="left" style={{ fontSize: '30px', color: '', fontWeight: '600', position: 'relative', left: '-5%',top:'-35%' }}>Best Rated</span>
        <span className="left" style={{ fontSize: '30px', color: 'darkkhaki', fontWeight: '600', position: 'relative', left: '20%',top:'-45%' }}>Rolls</span>



        <span className="right" style={{ fontSize: '30px', color: 'red', fontWeight: '600', position: 'relative',right:'70%' ,top:'-30%',}}>Panner</span>
        <span className="left" style={{ fontSize: '30px', color: 'orchid', fontWeight: '600', position: 'relative',right:'10%' }}>Kulcha</span>
        <span className="right" style={{ fontSize: '30px', color: 'white', fontWeight: '600', position: 'relative', right: '30%',top:'40%' }}>Burger</span>
        <span className="left" style={{ fontSize: '30px', color: 'black', fontWeight: '600', position: 'relative', right: '40%',top:'50%' }}>Biryani</span>
        <span className="right" style={{ fontSize: '30px', color: 'white', fontWeight: '600', position: 'relative', left: '0%',bottom:'-20%' }}>Rasgullah</span>
        <span className="left" style={{ fontSize: '30px', color: 'yellow', fontWeight: '600', position: 'relative', right: '-10%',bottom:'-30%' }}>Delicious!</span>
        <span className="right" style={{ fontSize: '30px', color: 'orchid', fontWeight: '600', position: 'relative', right: '0%',top:'-30%' }}>Momos!</span>
        <span className="left" style={{ fontSize: '30px', color: 'darkviolet', fontWeight: '600', position: 'relative', right: '-30%',top:'-30%' }}>Sabji!</span>

      </div>
    </Box>
  );
};

export default Add;
