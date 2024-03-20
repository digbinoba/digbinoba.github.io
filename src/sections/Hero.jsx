import React from 'react';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <div id="home-top-video">
      <video autoPlay loop muted width="100%">
        <source src="/blackhole.webm" type="video/webm" /> Your browser does not
        support the video tag. We suggest you upgrade your browser.
      </video>
      <div id="home-text">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
