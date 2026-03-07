import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Logos from './components/Logos';
import Work from './components/Work';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import DotDistortionShader from './components/Experience/DotDistortionShader';
import './App.css'; // Just keeping it for any potential app-level overrides

function App() {
  return (
    <div className="app-container">
      <div className="mesh-glow mesh-purple"></div>
      <div className="mesh-glow mesh-blue"></div>

      <Navbar />
      <Hero />
      <Logos />
      <Expertise />
      <Work />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
