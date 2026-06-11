import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Zap, Shield, Monitor } from 'lucide-react';
import './About.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | SIGN MAKER led board</title>
        <meta name="description" content="Learn about SIGN MAKER led board. We are Rajasthan's premier signage manufacturing and branding company with over a decade of experience." />
      </Helmet>

      <div className="page-header">
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>About <span className="highlight">Us</span></motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>Your trusted partner in signage manufacturing, branding, and digital display solutions.</motion.p>
        </div>
      </div>

      {/* Company Story */}
      <section className="section">
        <div className="container grid grid-2 items-center gap-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="mb-2">Our Story</h2>
            <p className="mb-1">Founded over a decade ago in Udaipur, SIGN MAKER led board started with a simple vision: to help local businesses establish a strong visual identity. What began as a small workshop has now grown into Rajasthan's premier signage manufacturing facility.</p>
            <p className="mb-1">We have continuously invested in modern technology, from precision CNC routers to advanced laser cutting machines, ensuring that our products meet the highest standards of quality and durability.</p>
            <p>Today, with over 1000+ completed projects and a team of dedicated professionals, we continue to push the boundaries of creative signage and outdoor advertising.</p>
          </motion.div>
          <motion.div className="glass-card p-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Office" style={{ width: '100%', borderRadius: 'var(--radius-sm)' }} loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="expertise-section section glass">
        <div className="container text-center">
          <div className="section-title">
            <h2>Our Expertise</h2>
            <p>Comprehensive solutions tailored to your brand's unique needs.</p>
          </div>
          <div className="grid grid-3 text-left">
            <div className="glass-card p-3">
              <Zap size={40} className="mb-1" style={{ color: 'var(--primary)' }} />
              <h3>Signage Manufacturing</h3>
              <p>In-house production of LED boards, 3D acrylic letters, glow signs, and custom metal letters using precision machinery.</p>
            </div>
            <div className="glass-card p-3">
              <Target size={40} className="mb-1" style={{ color: 'var(--primary)' }} />
              <h3>Branding & Advertising</h3>
              <p>Strategic outdoor advertising, billboard placements, and comprehensive graphic design services.</p>
            </div>
            <div className="glass-card p-3">
              <Monitor size={40} className="mb-1" style={{ color: 'var(--primary)' }} />
              <h3>Digital Displays</h3>
              <p>State-of-the-art LED screen walls, scrolling boards, and dynamic digital display solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Process</h2>
            <p>A streamlined approach to bring your vision to life.</p>
          </div>
          <div className="process-timeline">
            {[
              { title: 'Consultation', desc: 'We start by understanding your brand, requirements, and budget.' },
              { title: 'Design', desc: 'Our creative team crafts detailed 2D/3D mockups for your approval.' },
              { title: 'Manufacturing', desc: 'Using premium materials, we build your signage in our modern facility.' },
              { title: 'Installation', desc: 'Expert technicians ensure safe, secure, and perfect installation.' },
              { title: 'Support', desc: 'We provide ongoing maintenance and dedicated after-sales support.' }
            ].map((step, idx) => (
              <div key={idx} className="process-step">
                <div className="step-number">{idx + 1}</div>
                <div className="step-content glass-card">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Trust */}
      <section className="section team-trust">
        <div className="container grid grid-2 gap-4">
          <div className="glass-card p-3">
            <Users size={40} className="mb-1" style={{ color: 'var(--primary)' }} />
            <h2 className="mb-2">Team Excellence</h2>
            <p className="mb-1">Our team is our greatest asset. Comprising seasoned designers, meticulous craftsmen, expert welders, and skilled installation technicians, we work cohesively to deliver perfection.</p>
            <p>Every member of our staff undergoes regular training to stay updated with the latest industry standards, materials, and safety protocols.</p>
          </div>
          <div className="glass-card p-3">
            <Shield size={40} className="mb-1" style={{ color: 'var(--primary)' }} />
            <h2 className="mb-2">Why Businesses Trust Us</h2>
            <ul className="trust-list">
              <li><CheckCircle size={20} /> Proven Track Record of 10+ Years</li>
              <li><CheckCircle size={20} /> Uncompromising Quality Standards</li>
              <li><CheckCircle size={20} /> Transparent Pricing & Timelines</li>
              <li><CheckCircle size={20} /> End-to-End Service Delivery</li>
              <li><CheckCircle size={20} /> Dedicated After-Sales Service</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
