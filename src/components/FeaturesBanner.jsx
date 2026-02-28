import React from 'react';
import { ShieldCheck, Target, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesBanner = () => {
  const features = [
    { icon: <ShieldCheck size={24} />, text: "World-class services" },
    { icon: <Target size={24} />, text: "Experience strategy" },
    { icon: <Award size={24} />, text: "Award winning agency" },
    { icon: <TrendingUp size={24} />, text: "Grow your business" }
  ];

  return (
    <div className="features-banner">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {feature.icon}
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;
