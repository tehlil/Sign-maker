import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowUp, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
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
            <a href="https://www.instagram.com/kamaldigi_studio/" target="_blank" rel="noopener noreferrer" className="social-icon-btn insta">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-icon-btn fb">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-icon-btn tw">
              <Twitter size={20} />
            </a>
            <a href="https://wa.me/918560005555" target="_blank" rel="noopener noreferrer" className="social-icon-btn wa">
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
