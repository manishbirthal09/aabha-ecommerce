import AnnouncementBar from '../src/components/AnnouncementBar';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import TrendingNow from '../src/components/TrendingNow';
import InstagramSection from '../src/components/InstagramSection';
import Footer from '../src/components/Footer';
import About from './components/About';
import CustomCandleBanner from './components/CustomCandleBanner';
import USPSlider from './components/USPSection';

const App = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <TrendingNow />
      <CustomCandleBanner />
      <About />
      
      <InstagramSection />
      
      <Footer />
    </>
  );
};

export default App;