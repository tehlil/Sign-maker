import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowUp, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer section">
      <div className="container grid grid-4">
        <div className="footer-col">
          <h3 className="footer-logo">SIGN MAKER <span className="highlight">led board</span></h3>
          <p>Your trusted partner for innovative, high-quality signage and branding solutions in Rajasthan.</p>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Contact Details</h4>
          <ul className="contact-info">
            <li>
              <Phone size={18} />
              <a href="tel:08560005555">08560005555</a>
            </li>
            <li>
              <MapPin size={18} />
              <span>Ground floor Shop No.123, Parmatma Plaza, 124, Hospital Rd, above JMB Mishthan, near chetak cinema, Chetak Circle, Madhuban, Udaipur, Rajasthan 313001</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-links-wrapper">
            <a href="https://www.instagram.com/kamaldigi_studio/" target="_blank" rel="noopener noreferrer" className="social-icon-btn insta" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="social-icon-btn fb" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="social-icon-btn tw" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="https://wa.me/918560005555" target="_blank" rel="noopener noreferrer" className="social-icon-btn wa" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
          </div>
          <button className="back-to-top mt-2 btn btn-glass" onClick={scrollToTop}>
            <ArrowUp size={18} /> Back To Top
          </button>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          ©️ Copyright 2026 | Sign maker led board | All Rights Reserved | Powered by{' '}
          <a href="https://www.futurexdigitalmarketing.com/" target="_blank" rel="noopener noreferrer" style={{color:'#28a745'}}>Future X Digital Marketing</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
