import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Testimonials = () => {
  const reviews = [
    { name: 'Rajesh Sharma', company: 'Sharma Sweets', review: 'The LED board they installed for my shop is incredibly bright and eye-catching. Excellent service and timely delivery.' },
    { name: 'Priya Patel', company: 'Elegance Boutique', review: 'SIGN MAKER transformed our storefront. The 3D acrylic letters look so premium. Highly recommended!' },
    { name: 'Vikram Singh', company: 'Royal Palace Hotel', review: 'Professional team. They handled the entire outdoor advertising campaign flawlessly. Great ROI.' },
    { name: 'Anjali Verma', company: 'Verma Dental Clinic', review: 'The glow sign board is perfect. It gives a very modern and clean look to our clinic entrance.' },
    { name: 'Rahul Mehta', company: 'TechNova Solutions', review: 'Best sign makers in Udaipur. Their attention to detail and quality of materials used is unmatched.' },
    { name: 'Sunita Jain', company: 'Jain Emporium', review: 'From design to installation, the process was smooth. The final ACP glazing work exceeded our expectations.' },
    { name: 'Karan Malhotra', company: 'Fitness First Gym', review: 'The indoor LED display wall they setup is fantastic. It adds so much energy to our gym.' },
    { name: 'Neha Gupta', company: 'Gupta Traders', review: 'We ordered custom brass letters for our office reception. They look absolutely stunning and royal.' },
    { name: 'Amit Desai', company: 'Desai Automobiles', review: 'Fast turnaround and affordable pricing without compromising on quality. A rare find in this industry.' }
  ];

  return (
    <>
      <Helmet>
        <title>Client Testimonials | SIGN MAKER led board</title>
        <meta name="description" content="Read what our 500+ happy clients have to say about SIGN MAKER led board. We pride ourselves on delivering 100% customer satisfaction." />
      </Helmet>

      <div className="page-header">
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>Client <span className="highlight">Testimonials</span></motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>Don't just take our word for it. See what our clients say.</motion.p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <motion.div className="reviews-grid" variants={staggerContainer} initial="hidden" animate="visible">
            {reviews.map((test, idx) => (
              <motion.div key={idx} variants={fadeIn} className="review-card glass-card">
                <Quote size={40} className="quote-icon" />
                <div className="stars mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FFD700" color="#FFD700" />)}
                </div>
                <p className="review-content">"{test.review}"</p>
                <div className="client-info mt-auto">
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

      <section className="section glass satisfaction-section">
        <div className="container text-center max-w-800" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="mb-2">100% Client Satisfaction Guarantee</h2>
          <p>We are committed to delivering the highest quality signage and branding solutions. Our dedicated team works closely with every client to ensure their vision is realized to perfection. Join our growing list of satisfied customers today.</p>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
