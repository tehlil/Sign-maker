import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Services = () => {
  const serviceItems = [
    'Outdoor Advertising', 'Graphic Design', 'Print Ads', 'TV & Video', 
    'Billboard Design and Consulting', 'Branding', 'Logo Design', 'Paid Advertising', 
    'ACP Glazing', 'Acrylic 3D Letters', 'Acrylic LED Letters', 'Acrylic Sign Boards', 
    'Brass Letters', 'Channel Letter', 'CNC Cutting', 'Creative Design', 
    'Fabric Board', 'Flex Boards', 'Glass Work', 'Glow Sign Board', 
    'LED Letters', 'LED Screen Wall', 'LED Sign Board Manufacturer', 'LED Board Maker', 
    'Laser and CNC Cutting', 'LED Board', 'LED Display', 'LED Display Board', 
    'LED Sign Board', 'LED Sign Board Manufacture', 'LED Sign Board Maker', 
    'Market Analysis', 'Marketing Strategy', 'SS & Brass Letters', 'Sign Letters', 
    'Sign Maker', 'Stainless Steel Letter', 'Steel Letter Board'
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | SIGN MAKER led board</title>
        <meta name="description" content="Explore our extensive range of signage and branding services including LED Boards, Acrylic Letters, ACP Glazing, CNC Cutting, and Outdoor Advertising." />
      </Helmet>

      <div className="page-header">
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>Our <span className="highlight">Services</span></motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>Comprehensive signage and branding solutions to illuminate your business.</motion.p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <motion.div 
            className="services-grid"
            variants={staggerContainer} initial="hidden" animate="visible"
          >
            {serviceItems.map((srv, idx) => (
              <motion.div key={idx} variants={fadeIn} className="glass-card srv-card">
                <div className="srv-icon-wrapper">
                  <Sparkles size={24} className="srv-icon" />
                </div>
                <h3>{srv}</h3>
                <p>Professional {srv.toLowerCase()} tailored to your specific business requirements.</p>
                <Link to="/contact" className="srv-link">Get Quote <ArrowRight size={16} /></Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="section glass">
        <div className="container text-center max-w-800" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="mb-2">Need a Custom Solution?</h2>
          <p className="mb-3">Don't see exactly what you're looking for? We specialize in custom signage tailored to your unique needs. Get in touch with our experts to discuss your project.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
        </div>
      </section>
    </>
  );
};

export default Services;
