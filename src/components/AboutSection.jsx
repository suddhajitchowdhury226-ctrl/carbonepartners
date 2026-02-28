import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container about-grid">
        <motion.div 
          className="about-content"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="tagline">ABOUT BUSINESS</span>
          <h2>Smart and effective<br/>business solutions.</h2>
          <p className="about-desc">
            We are excited for our work and how it positively impacts clients. 
            With over 12 years of experience we have been constantly providing 
            excellent solutions.
          </p>
          
          <div className="stat-circle-wrap">
            <div className="stat-circle">1%</div>
            <div className="stat-text">
              Increased revenue in<br/>the <a href="#">last 2 years.</a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="about-image"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
           {/* Add a placeholder image or leave empty block to emulate right side content if any */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
