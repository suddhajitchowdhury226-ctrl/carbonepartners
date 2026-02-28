import React from 'react';
import { Phone, ArrowRight, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container nav-container">
        <div className="logo">
          <HeartPulse className="logo-icon" size={28} />
          Business
        </div>
        
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <a href="tel:1800222000" className="contact-phone">
            <div className="phone-icon-wrapper">
              <Phone size={16} fill="white" />
            </div>
            1 800 222 000
          </a>
          <button className="btn-outline">
            GET A QUOTE
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
