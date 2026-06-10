import { useEffect, useState } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = '918560005555';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      <div className="floating-left">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="float-btn whatsapp" aria-label="WhatsApp Us">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="24" height="24" />
        </a>
        <a href="tel:08560005555" className="float-btn call" aria-label="Call Us">
          <Phone />
        </a>
      </div>

      <div className={`floating-right ${showScroll ? 'visible' : ''}`}>
        <button className="float-btn scroll-top" onClick={scrollToTop} aria-label="Scroll to Top">
          <ArrowUp />
        </button>
      </div>
    </>
  );
};

export default FloatingButtons;
