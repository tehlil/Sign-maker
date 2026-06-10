import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import './Contact.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | SIGN MAKER led board</title>
        <meta name="description" content="Contact SIGN MAKER led board in Udaipur for all your signage and branding needs. Call 08560005555 or visit our shop at Parmatma Plaza." />
      </Helmet>

      <div className="page-header">
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>Contact <span className="highlight">Us</span></motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>Get in touch to discuss your signage requirements.</motion.p>
        </div>
      </div>

      <section className="section">
        <div className="container grid grid-2 gap-4">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="mb-2">Get In Touch</h2>
            <p className="mb-3">We are here to help you build your brand visibility. Reach out to us via phone, WhatsApp, or visit our office in Udaipur.</p>
            
            <div className="contact-info-list">
              <div className="contact-item glass-card">
                <div className="contact-icon"><Phone size={24} /></div>
                <div>
                  <h3>Phone Number</h3>
                  <a href="tel:08560005555">08560005555</a>
                </div>
              </div>

              <div className="contact-item glass-card">
                <div className="contact-icon" style={{ background: '#25D366', color: 'white' }}>
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3>WhatsApp</h3>
                  <a href="https://wa.me/918560005555" target="_blank" rel="noopener noreferrer">+91 8560005555</a>
                </div>
              </div>

              <div className="contact-item glass-card">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div>
                  <h3>Our Address</h3>
                  <p>Ground floor Shop No.123, Parmatma Plaza, 124, Hospital Rd, above JMB Mishthan, near chetak cinema, Chetak Circle, Madhuban, Udaipur, Rajasthan 313001</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>
            <form className="contact-form glass-card" onSubmit={(e) => e.preventDefault()}>
              <h2 className="mb-2">Send a Message</h2>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Your Phone Number" required />
              </div>
              <div className="form-group">
                <label>Service Required</label>
                <select required>
                  <option value="">Select a Service</option>
                  <option value="LED Sign Board">LED Sign Board</option>
                  <option value="3D Acrylic Letters">3D Acrylic Letters</option>
                  <option value="Glow Sign Board">Glow Sign Board</option>
                  <option value="Outdoor Advertising">Outdoor Advertising</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message <Send size={18}/></button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="map-section section pt-0" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="glass-card p-2" style={{ padding: '1rem' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29023.605732202526!2d73.65317407431641!3d24.590897000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5724f7440b3%3A0x9615aab67df62da3!2sSIGN%20MAKER%20led%20board!5e0!3m2!1sen!2sin!4v1781073789094!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: 'var(--radius-sm)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
