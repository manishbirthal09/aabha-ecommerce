import React from 'react'
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrendingNow from '../components/TrendingNow';
import InstagramSection from '../components/InstagramSection';
import Footer from '../components/Footer';
import About from '../components/About';
import CustomCandleBanner from '../components/CustomCandleBanner';
import USPSlider from '../components/USPSection';
import CategoryCircles from '../components/CategoryCircles';
const Home = () => {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
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
