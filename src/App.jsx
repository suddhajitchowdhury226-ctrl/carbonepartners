import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBanner from './components/FeaturesBanner';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <FeaturesBanner />
      <AboutSection />
      <ServicesSection />
      
      <footer className="footer">
        <div className="container" style={{ textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} Carbone Partners. Inspired by Crafto Business.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
