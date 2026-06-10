import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowUp } from 'lucide-react';
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
          <a href="https://www.instagram.com/kamaldigi_studio/" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> Instagram
          </a>
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
