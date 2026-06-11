import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Monitor, Image as ImageIcon, Briefcase, Award, PenTool, LayoutTemplate, MessageCircle, Star, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import Counter from '../components/Counter';
import './Home.css';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const heroImages = [
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1559136555-e4616dcb33f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const services = [
    { icon: <Monitor size={40} />, title: 'LED Sign Boards', desc: 'Premium, bright, and energy-efficient LED signage.' },
    { icon: <ImageIcon size={40} />, title: 'Acrylic 3D Letters', desc: 'Elegant and durable 3D acrylic letters for modern branding.' },
    { icon: <Award size={40} />, title: 'Glow Sign Boards', desc: 'High-visibility glow signs to make your business stand out 24/7.' },
    { icon: <Briefcase size={40} />, title: 'Outdoor Advertising', desc: 'Strategic outdoor ad placements for maximum reach.' },
    { icon: <PenTool size={40} />, title: 'Graphic Design', desc: 'Creative designs that communicate your brand values.' },
    { icon: <LayoutTemplate size={40} />, title: 'Branding Solutions', desc: 'Comprehensive branding packages for businesses.' }
  ];

  const faqs = [
    { q: 'What types of sign boards do you manufacture?', a: 'We manufacture a wide range of sign boards including LED display boards, acrylic 3D letters, glow sign boards, ACP glazing, brass letters, and custom flex boards.' },
    { q: 'Do you provide installation services?', a: 'Yes, we provide complete end-to-end services from consultation and design to manufacturing and professional installation at your site.' },
    { q: 'Do you work across Rajasthan?', a: 'While we are based in Udaipur, we handle projects and deliver our services across Rajasthan.' },
    { q: 'How long does production take?', a: 'Production time varies depending on the complexity and size of the project. Typically, standard signs take 3-7 business days.' },
    { q: 'Do you create custom signage?', a: 'Absolutely! We specialize in custom signage tailored to your specific brand guidelines and requirements.' },
    { q: 'Do you offer LED display solutions?', a: 'Yes, we offer advanced LED display screens and scrolling LED boards for dynamic advertising needs.' }
  ];

  const testimonials = [
    { name: 'Rajesh Sharma', company: 'Sharma Sweets', review: 'The LED board they installed for my shop is incredibly bright and eye-catching. Excellent service and timely delivery.' },
    { name: 'Priya Patel', company: 'Elegance Boutique', review: 'SIGN MAKER transformed our storefront. The 3D acrylic letters look so premium. Highly recommended!' },
    { name: 'Vikram Singh', company: 'Royal Palace Hotel', review: 'Professional team. They handled the entire outdoor advertising campaign flawlessly. Great ROI.' },
    { name: 'Anjali Verma', company: 'Verma Dental Clinic', review: 'The glow sign board is perfect. It gives a very modern and clean look to our clinic entrance.' },
    { name: 'Rahul Mehta', company: 'TechNova Solutions', review: 'Best sign makers in Udaipur. Their attention to detail and quality of materials used is unmatched.' },
    { name: 'Sunita Jain', company: 'Jain Emporium', review: 'From design to installation, the process was smooth. The final ACP glazing work exceeded our expectations.' }
  ];

  return (
    <>
      <Helmet>
        <title>SIGN MAKER led board | Premium Signage in Udaipur</title>
        <meta name="description" content="Leading LED Sign Board Manufacturer in Udaipur. We specialize in Acrylic Sign Boards, Glow Sign Boards, LED Displays, and Branding Services across Rajasthan." />
        <meta name="keywords" content="Sign Maker Udaipur, LED Sign Board Manufacturer Udaipur, Acrylic Sign Board Udaipur, Glow Sign Board Udaipur, Branding Services Udaipur" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        {heroImages.map((img, idx) => (
          <div 
            key={idx}
            className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%), url(${img})` }}
          ></div>
        ))}
        <div className="container hero-content">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
          >
            Illuminate Your Brand's <span className="highlight">Presence</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}
            className="hero-subtitle"
          >
            Rajasthan's most trusted signage and branding partner. We deliver innovative, high-quality display solutions that make your business stand out.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.4 }}
          >
            <a href="tel:08560005555" className="btn btn-primary">Call Now</a>
            <Link to="/contact" className="btn btn-glass">Get Quote</Link>
            <Link to="/services" className="btn btn-secondary">View Services <ArrowRight size={18}/></Link>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics section">
        <div className="container grid grid-4">
          <div className="metric-card glass">
            <h3><Counter end={1000} suffix="+" /></h3>
            <p>Projects Completed</p>
          </div>
          <div className="metric-card glass">
            <h3><Counter end={500} suffix="+" /></h3>
            <p>Happy Clients</p>
          </div>
          <div className="metric-card glass">
            <h3><Counter end={10} suffix="+" /></h3>
            <p>Years Experience</p>
          </div>
          <div className="metric-card glass">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="about-preview section">
        <div className="container grid grid-2 items-center gap-4">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="about-image-wrapper"
          >
            <div className="glass-card about-image-card">
              <img src="https://images.unsplash.com/photo-1559136555-e4616dcb33f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sign Manufacturing Process" className="about-image" />
            </div>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>Crafting Excellence Since a Decade</h2>
            <p className="mb-2">At SIGN MAKER led board, we blend creativity with modern technology to deliver premium signage solutions. Whether you need a glowing 3D acrylic sign for your boutique or a massive LED display for your corporate office, we have the expertise to bring your vision to life.</p>
            <ul className="check-list mb-3">
              <li><CheckCircle className="check-icon" /> Premium Materials</li>
              <li><CheckCircle className="check-icon" /> Experienced Team</li>
              <li><CheckCircle className="check-icon" /> Fast Turnaround</li>
            </ul>
            <Link to="/about" className="btn btn-primary">Read More</Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-preview section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Services</h2>
            <p>Discover our comprehensive range of signage and branding solutions designed to elevate your business identity.</p>
          </div>
          <motion.div 
            className="grid grid-3"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {services.map((srv, idx) => (
              <motion.div key={idx} variants={fadeIn} className="service-card glass-card">
                <div className="service-icon">{srv.icon}</div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
                <Link to="/services" className="service-link">Learn More <ArrowRight size={16} /></Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-4" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section">
        <div className="container grid grid-2 gap-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mv-card glass">
            <h2>Our Mission</h2>
            <p>Deliver innovative, high-quality signage and branding solutions that help businesses stand out and effectively communicate their unique identity to the world.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }} className="mv-card glass">
            <h2>Our Vision</h2>
            <p>Become Rajasthan's most trusted and sought-after signage and branding partner, known for our commitment to quality, creativity, and customer satisfaction.</p>
          </motion.div>
        </div>
      </section>

      {/* Core Values & Why Choose Us */}
      <section className="values-why section">
        <div className="container grid grid-2 gap-4">
          <div className="values">
            <h2 className="mb-2">Core Values</h2>
            <div className="values-grid">
              {['Quality', 'Innovation', 'Creativity', 'Integrity', 'Customer Satisfaction'].map((val, i) => (
                <div key={i} className="value-item glass-card">
                  <Star className="value-icon" /> {val}
                </div>
              ))}
            </div>
          </div>
          <div className="why-us">
            <h2 className="mb-2">Why Choose Us</h2>
            <ul className="why-list">
              <li><CheckCircle /> Experienced Team</li>
              <li><CheckCircle /> Premium Materials</li>
              <li><CheckCircle /> Custom Solutions</li>
              <li><CheckCircle /> Fast Turnaround</li>
              <li><CheckCircle /> Affordable Pricing</li>
              <li><CheckCircle /> Modern Technology</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it. Here is what some of our 500+ happy clients have to say about our work.</p>
          </div>
          <motion.div 
            className="grid grid-3"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {testimonials.map((test, idx) => (
              <motion.div key={idx} variants={fadeIn} className="testimonial-card glass-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" color="#FFD700" />)}
                </div>
                <p className="review-text">"{test.review}"</p>
                <div className="client-info">
                  <div className="client-avatar">{test.name.charAt(0)}</div>
                  <div>
                    <h4>{test.name}</h4>
                    <span>{test.company}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq section">
        <div className="container max-w-800" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our signage and branding services.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item glass ${openFaq === idx ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(idx)}>
                  <h3>{faq.q}</h3>
                  {openFaq === idx ? <ChevronUp /> : <ChevronDown />}
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large CTA Section */}
      <section className="cta-section section">
        <div className="container text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="cta-content glass-card"
          >
            <h2>Let's Build Your Brand Visibility</h2>
            <p className="mb-3">Ready to transform your storefront or launch a new outdoor campaign? Contact our experts today for a free consultation and quote.</p>
            <div className="cta-buttons">
              <a href="tel:08560005555" className="btn btn-primary"><Phone size={20} /> Call Now</a>
              <a href="https://wa.me/918560005555" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ backgroundColor: '#25D366', color: 'white', borderColor: '#25D366' }}>
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
