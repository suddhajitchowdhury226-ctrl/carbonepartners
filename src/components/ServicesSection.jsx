import React from 'react';
import { Briefcase, BarChart, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: <Briefcase size={40} />,
      title: 'Business planning',
      desc: 'We provide business planning services to help you make right decisions.'
    },
    {
      icon: <BarChart size={40} />,
      title: 'Business research',
      desc: 'We use the latest tools and databases to get robust business research data.'
    },
    {
      icon: <Settings size={40} />,
      title: 'Tracking operations',
      desc: 'Let us track operations and performance metrics to keep you on schedule.'
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Professional services</h2>
            <p className="about-desc">Tailoring our services to your specific business needs to maximize impact.</p>
          </motion.div>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              className="service-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
