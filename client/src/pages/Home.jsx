import React from 'react'

import Hero from '../components/Hero';
import TrendingNow from '../components/TrendingNow';
import InstagramSection from '../components/InstagramSection';

import About from '../components/About';
import CustomCandleBanner from '../components/CustomCandleBanner';
import USPSlider from '../components/USPSection';
import CategoryCircles from '../components/CategoryCircles';
const Home = () => {
  return (
    <div>
      
      <Hero />
      <CategoryCircles />
      <TrendingNow />
      <CustomCandleBanner />
      <About />
      
      <InstagramSection />
      
      
    </div>
  )
}

export default Home
