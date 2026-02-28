import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url('/hero.png')` }}
    >
      <div className="hero-overlay"></div>
      
      <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-subtitle">Business strategies and top ideas</div>
          <h1 className="hero-title">
            Provide solutions <br /> to small business.
          </h1>
          <button className="btn-primary" style={{ padding: '8px 8px 8px 32px', fontSize: '13px', letterSpacing: '1px' }}>
            GET STARTED NOW
            <div className="btn-icon">
              <ArrowRight size={16} />
            </div>
          </button>
        </motion.div>
        
        <motion.div 
          className="hero-watermark"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          01 /* Using 01 to mark slide/slider */
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
