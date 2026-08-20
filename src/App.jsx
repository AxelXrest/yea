import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Stats from './components/Stats/Stats';
import Classes from './components/Classes/Classes';
import WhyParents from './components/WhyParents/WhyParents';
import Learning from './components/Learning/Learning';
import Teachers from './components/Teachers/Teachers';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
      <div className="App">
        <Header menuOpen={menuOpen} onMenuToggle={handleMenuToggle} onMenuClose={handleMenuClose} />
        <Hero />
        <Features />
        <Stats />
        <Classes />
        <WhyParents />
        <Learning />
        <Teachers />
        <Testimonials />
        <FAQ />
        <Gallery />
        <Footer />
      </div>
  );
}

export default App;