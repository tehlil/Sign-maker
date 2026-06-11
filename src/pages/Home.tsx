import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Monitor, Briefcase, Award, PenTool, LayoutTemplate, MessageCircle, Star, ChevronDown, Phone, Users, Calendar, Headphones, Target, Eye, ShieldCheck, Lightbulb, Palette, Heart, ThumbsUp, Zap, Sliders, DollarSign, Clock, Sparkles } from 'lucide-react';
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
  '/hero-img-1.webp',
  '/hero-img-2.webp',
  '/hero-img-3.webp'
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredMv, setHoveredMv] = useState<'mission' | 'vision' | null>(null);

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
    { name: 'Sunita Jain', company: 'Jain Emporium', review: 'From design to installation, the process was smooth. The final ACP glazing work exceeded our expectations.' },
    { name: 'Amit Trivedi', company: 'Trivedi Electronics', review: 'The custom neon signs they designed for our showroom look absolutely stellar. The glow is uniform and grabs attention instantly!' },
    { name: 'Sneha Reddy', company: 'Reddy Diagnostic Labs', review: 'Very professional group of engineers. They delivered the scrolling LED display screens on time and did the complete mounting safely.' },
    { name: 'Manish Goel', company: 'Goel Jewellers', review: 'Our gold-plated brass letters look extremely regal on the storefront facade. The finishing is flawless. Excellent craftsmanship!' },
    { name: 'Karan Johar', company: 'Karan Cafe & Resto', review: 'Fantastic work with neon lighting! Our cafe\'s interior photo zone has become a huge hit on Instagram thanks to their custom neon signs.' },
    { name: 'Divya Nair', company: 'Nair Spa & Salon', review: 'We got our ACP glazing and acrylic 3D letters done. Very clean installation and prompt responses to all our queries.' },
    { name: 'Sanjay Dutt', company: 'Dutt Auto Agency', review: 'The high-visibility outdoor hoarding they built for our dealership is rock-solid. Survived the heavy monsoon wind and rain without issues.' },
    { name: 'Meera Joshi', company: 'Joshi Organic Stores', review: 'Friendly support team. They patiently refined the graphic design layouts multiple times until we got exactly what we wanted.' }
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
        <div className="hero-background-base"></div>
        <div className="container grid grid-2 items-center gap-4 hero-content-wrapper">
          <motion.div 
            className="hero-text-content"
            initial="hidden" animate="visible" variants={fadeIn}
          >
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
          </motion.div>

          <motion.div 
            className="hero-carousel-wrapper"
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.3 }}
          >
            <div className="carousel-container glass-card">
              {heroImages.map((img, idx) => (
                <div 
                  key={idx}
                  className={`carousel-slide ${idx === currentSlide ? 'active' : ''}`}
                >
                  <img src={img} alt={`Sign Board ${idx + 1}`} loading={idx === 0 ? "eager" : "lazy"} />
                </div>
              ))}
              <div className="carousel-indicators">
                {heroImages.map((_, idx) => (
                  <button 
                    key={idx} 
                    className={`indicator ${idx === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics section">
        <div className="container grid grid-4">
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="metric-card vibrant-card-1">
            <div className="metric-icon"><Briefcase size={32} /></div>
            <h3><Counter end={1000} suffix="+" /></h3>
            <p>Projects Completed</p>
          </motion.div>
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="metric-card vibrant-card-2">
            <div className="metric-icon"><Users size={32} /></div>
            <h3><Counter end={500} suffix="+" /></h3>
            <p>Happy Clients</p>
          </motion.div>
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="metric-card vibrant-card-3">
            <div className="metric-icon"><Calendar size={32} /></div>
            <h3><Counter end={10} suffix="+" /></h3>
            <p>Years Experience</p>
          </motion.div>
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="metric-card vibrant-card-4">
            <div className="metric-icon"><Headphones size={32} /></div>
            <h3>24/7</h3>
            <p>Customer Support</p>
          </motion.div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="about-preview section relative">
        <div className="container grid grid-2 items-center gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="about-image-wrapper"
          >
            <div className="about-decoration-blob"></div>
            <div className="glass-card about-image-card floating-anim">
              <img src="/images/sign_maker_workshop.webp" alt="Sign Manufacturing Process" className="about-image" loading="lazy" />
              <div className="experience-badge">
                <span className="years">10+</span>
                <span className="text">Years of<br/>Excellence</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="about-content-wrapper"
          >
            <motion.div variants={fadeIn}>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                Crafting <span className="highlight">Excellence</span> Since a Decade
              </h2>
              <p className="mb-2 lead-text">
                At <strong>SIGN MAKER led board</strong>, we blend creativity with modern technology to deliver premium signage solutions. 
              </p>
              <p className="mb-3 text-secondary">
                Whether you need a glowing 3D acrylic sign for your boutique or a massive LED display for your corporate office, we have the expertise to bring your vision to life.
              </p>
            </motion.div>

            <motion.ul className="check-list mb-3" variants={staggerContainer}>
              {['Premium Materials', 'Experienced Team', 'Fast Turnaround'].map((item, i) => (
                <motion.li key={i} variants={fadeIn} className="check-item">
                  <CheckCircle className="check-icon" /> {item}
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div variants={fadeIn}>
              <Link to="/about" className="btn btn-primary btn-lg pulse-hover">Discover Our Story <ArrowRight size={18}/></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Services</h2>
            <p>From design to installation, we provide end-to-end signage solutions tailored to your brand's unique identity.</p>
          </div>
          <div className="grid grid-3">
            {[
              { 
                icon: <Monitor size={32} />, 
                title: "LED Sign Boards", 
                desc: "Energy-efficient and highly visible LED displays for modern businesses.", 
                colorClass: "vibrant-srv-1",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              { 
                icon: <PenTool size={32} />, 
                title: "Acrylic 3D Letters", 
                desc: "Premium 3D acrylic letters that give your brand a sophisticated look.", 
                colorClass: "vibrant-srv-2",
                image: "https://images.unsplash.com/photo-1510488214227-2b73719b48b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              { 
                icon: <LayoutTemplate size={32} />, 
                title: "Neon Signs", 
                desc: "Custom neon signs to add a vibrant, retro touch to your interior or exterior.", 
                colorClass: "vibrant-srv-3",
                image: "https://images.unsplash.com/photo-1554260570-e9689a3418b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`home-srv-card ${service.colorClass}`}
              >
                <img src={service.image} alt={service.title} className="home-srv-card-image" loading="lazy" />
                <div className="home-srv-card-content">
                  <div className="home-srv-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link to="/services" className="home-srv-link mt-auto">Learn More <ArrowRight size={16} /></Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-premium section relative">
        <div className="container">
          <div className="section-title">
            <span className="badge">Our Purpose</span>
            <h2>How We Light the Way</h2>
            <p>Blending creativity with cutting-edge engineering to illuminate brand identities.</p>
          </div>
          
          <div className="grid grid-2 gap-4 items-center mv-premium-wrapper">
            
            {/* Left: Interactive Neon Board Showcase */}
            <div className="neon-showcase-container">
              <div className="neon-grid-mesh"></div>
              <div className="neon-board-frame">
                <div className="bolt top-left"></div>
                <div className="bolt top-right"></div>
                <div className="bolt bottom-left"></div>
                <div className="bolt bottom-right"></div>
                
                {/* Mission Neon Sign */}
                <div className={`neon-sign mission-sign ${hoveredMv === 'mission' ? 'glow-on' : 'glow-dim'}`}>
                  <span className="neon-label">MISSION</span>
                  <div className="neon-tubes">
                    <span className="tube-text cyan-glow">CRAFT</span>
                    <span className="tube-text cyan-glow">EXCELLENCE</span>
                  </div>
                </div>

                {/* Divider Wire */}
                <div className="neon-wire"></div>

                {/* Vision Neon Sign */}
                <div className={`neon-sign vision-sign ${hoveredMv === 'vision' ? 'glow-on' : 'glow-dim'}`}>
                  <span className="neon-label">VISION</span>
                  <div className="neon-tubes">
                    <span className="tube-text pink-glow">ILLUMINATE</span>
                    <span className="tube-text pink-glow">THE FUTURE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Cards */}
            <div className="mv-cards-column">
              {/* Mission Card */}
              <div 
                className={`mv-glass-panel mission-panel ${hoveredMv === 'mission' ? 'active' : ''}`}
                onMouseEnter={() => setHoveredMv('mission')}
                onMouseLeave={() => setHoveredMv(null)}
              >
                <div className="mv-panel-header">
                  <div className="mv-panel-icon cyan-bg">
                    <Target size={24} />
                  </div>
                  <h3>Our Mission</h3>
                </div>
                <p>To deliver innovative, high-quality signage and branding solutions that help businesses stand out and effectively communicate their unique identity to the world.</p>
                <div className="panel-glow-layer"></div>
              </div>

              {/* Vision Card */}
              <div 
                className={`mv-glass-panel vision-panel ${hoveredMv === 'vision' ? 'active' : ''}`}
                onMouseEnter={() => setHoveredMv('vision')}
                onMouseLeave={() => setHoveredMv(null)}
              >
                <div className="mv-panel-header">
                  <div className="mv-panel-icon pink-bg">
                    <Eye size={24} />
                  </div>
                  <h3>Our Vision</h3>
                </div>
                <p>To become Rajasthan's most trusted and sought-after signage and branding partner, known for our commitment to quality, creativity, and customer satisfaction.</p>
                <div className="panel-glow-layer"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values & Why Choose Us */}
      <section className="values-why section relative">
        <div className="vw-background-blob-1"></div>
        <div className="vw-background-blob-2"></div>
        <div className="container grid grid-2 gap-4 vw-grid">
          {/* Core Values */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="values-container"
          >
            <motion.h2 variants={fadeIn} className="section-subtitle-vw">
              Our <span className="highlight">Core Values</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="vw-intro-text">
              The principles that guide our work, define our culture, and drive our commitment to excellence.
            </motion.p>
            
            <div className="values-creative-grid">
              {[
                { icon: <ShieldCheck size={28} />, title: 'Quality', desc: 'Crafting signage with high-grade, durable materials built to last.', color: '#0e98ba' },
                { icon: <Lightbulb size={28} />, title: 'Innovation', desc: 'Embracing modern technology and lighting techniques for maximum impact.', color: '#8a2be2' },
                { icon: <Palette size={28} />, title: 'Creativity', desc: 'Designing tailored visual identities that capture each brand’s essence.', color: '#ff007f' },
                { icon: <Heart size={28} />, title: 'Integrity', desc: 'Building relationships based on transparency, honesty, and trust.', color: '#10b981' },
                { icon: <ThumbsUp size={28} />, title: 'Customer First', desc: 'Ensuring absolute satisfaction through responsive, dedicated support.', color: '#f59e0b' }
              ].map((val, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeIn} 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="value-card glass-card"
                  style={{
                    '--card-color': val.color,
                    '--card-glow': `${val.color}15`
                  } as React.CSSProperties}
                >
                  <div className="value-card-icon-wrapper">
                    {val.icon}
                  </div>
                  <div className="value-card-info">
                    <h4>{val.title}</h4>
                    <p>{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="why-us-container"
          >
            <motion.h2 variants={fadeIn} className="section-subtitle-vw">
              Why <span className="highlight">Choose Us</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="vw-intro-text">
              We are dedicated to elevating your brand presence through top-tier craftsmanship and unmatched service.
            </motion.p>

            <div className="why-creative-list">
              {[
                { icon: <Users size={24} />, title: 'Experienced Team', desc: 'A dedicated team of design, production, and installation specialists with 10+ years of expertise.', color: '#3b82f6' },
                { icon: <Award size={24} />, title: 'Premium Materials', desc: 'We never compromise on components, using high-grade acrylics, LEDs, and structural frameworks.', color: '#eab308' },
                { icon: <Sliders size={24} />, title: 'Custom Solutions', desc: 'No cookie-cutter designs. Every project is fully personalized to fit your exact branding needs.', color: '#ec4899' },
                { icon: <Zap size={24} />, title: 'Fast Turnaround', desc: 'Efficient production pipelines ensuring quick lead times without sacrificing structural quality.', color: '#f97316' },
                { icon: <DollarSign size={24} />, title: 'Affordable Pricing', desc: 'Honest, competitive pricing offering the absolute best value and return on investment.', color: '#14b8a6' },
                { icon: <Clock size={24} />, title: 'Reliable Support', desc: 'Comprehensive post-installation customer service to keep your signs illuminated 24/7.', color: '#8b5cf6' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeIn} 
                  whileHover={{ x: 8 }}
                  className="why-item-card glass-card"
                  style={{
                    '--card-color': item.color,
                    '--card-glow': `${item.color}15`
                  } as React.CSSProperties}
                >
                  <div className="why-item-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="why-item-info">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section relative">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it. Here is what some of our 500+ happy clients have to say about our work.</p>
          </div>
        </div>

        <div className="testimonials-marquee-container">
          {/* Row 1: Left Scrolling */}
          <div className="marquee-track">
            <div className="marquee-content scroll-left">
              {testimonials.map((test, idx) => (
                <div key={`row-${idx}`} className="testimonial-card glass-card marquee-card">
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
                </div>
              ))}
              {/* Duplicate Row for seamless scrolling */}
              {testimonials.map((test, idx) => (
                <div key={`row-dup-${idx}`} className="testimonial-card glass-card marquee-card" aria-hidden="true">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-premium section relative">
        <div className="faq-bg-blob"></div>
        <div className="container grid grid-2 gap-4 items-start">
          
          {/* Left Column: Visual Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="faq-intro"
          >
            <span className="badge">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p className="intro-desc">Find answers to common questions about our signage, LED display boards, acrylic 3D letters, and custom branding services across Rajasthan.</p>
            
            {/* Custom Interactive Signboard Card */}
            <div className="faq-visual-card glass-card">
              <div className="visual-card-glow"></div>
              <h3>Need Custom Signage?</h3>
              <p>Speak to our design specialists to draft a custom sign blueprint for your storefront today.</p>
              <a href="tel:08560005555" className="btn btn-primary pulse-hover mt-3" style={{ display: 'inline-block' }}>Get Consultation</a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="faq-list-premium"
          >
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item-premium glass-card ${openFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question-premium">
                  <span className="faq-number">{(idx + 1).toString().padStart(2, '0')}</span>
                  <h3>{faq.q}</h3>
                  <div className="faq-icon-wrapper">
                    <ChevronDown size={20} className="faq-chevron" />
                  </div>
                </div>
                <div className="faq-answer-premium">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Large CTA Section */}
      <section className="cta-premium-section section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="cta-showcase-panel"
          >
            <div className="cta-grid-mesh"></div>
            <div className="cta-glow-blob-1"></div>
            <div className="cta-glow-blob-2"></div>
            
            <div className="cta-panel-content text-center">
              <span className="cta-badge">
                <Sparkles size={16} /> Elevate Your Storefront
              </span>
              <h2>Ready to Make Your Brand <span className="cta-highlight">Glow</span>?</h2>
              <p className="cta-desc">
                Partner with Rajasthan's premier sign makers. We draft, build, and install custom high-visibility LED displays, neon signs, and premium acrylic lettering.
              </p>
              
              <div className="cta-buttons-wrapper">
                <a href="tel:08560005555" className="btn btn-cta btn-call">
                  <Phone size={20} /> Call Now
                </a>
                <a href="https://wa.me/918560005555" target="_blank" rel="noopener noreferrer" className="btn btn-cta btn-whatsapp">
                  <MessageCircle size={20} /> WhatsApp Us
                </a>
              </div>

              {/* Trust Badges */}
              <div className="cta-trust-badges">
                <div className="trust-badge">
                  <ShieldCheck size={18} />
                  <span>Premium Grade Materials</span>
                </div>
                <div className="trust-badge">
                  <Clock size={18} />
                  <span>On-Time Delivery & Install</span>
                </div>
                <div className="trust-badge">
                  <Award size={18} />
                  <span>10+ Years of Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
