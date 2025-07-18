import React from 'react';
import imagetravelling from './Images/travelingimage.jpg';
import { motion } from 'framer-motion';

// Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeInDown = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const FirstPage = () => {
  return (
    <motion.div
      className="first-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Heading Section */}
      <motion.div className="heading text-left" variants={fadeInDown}>
        <h1 style={{ fontSize: '90px', fontWeight: 'bold' }}>Plan your</h1>
        <p style={{ fontSize: '40px', fontWeight: '300' }}>Escape</p>
      </motion.div>

      {/* Get Started Section */}
      <div className="get_started d-flex justify-content-left py-5">
        <motion.div
          className="sidelines"
          style={{ width: '90%', maxWidth: '600px' }}
          variants={fadeInUp}
        >
          <motion.p
            className="p_getstarted"
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              fontFamily: 'Satoshi, sans-serif',
              textAlign: 'justify',
            }}
            variants={fadeInUp}
          >
            Your journey starts here—download the Easy Trip app now and unlock seamless bookings,
            personalized adventures, and exclusive travel deals. It's time to explore more, stress less.
          </motion.p>

          <motion.button className="btn btn-dark mt-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Get Started
          </motion.button>

          {/* Logos Section */}
          <motion.div className="Logos d-flex align-items-center gap-3 mt-4" variants={fadeInUp}>
            <p style={{ fontFamily: 'sans-serif', fontSize: '18px' }}>
              The mobile app is <br /> available now
            </p>
            <div className="logo d-flex gap-3">
              {/* Apple Logo */}
              <svg width="35" height="35" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.665 13.547c-.02-2.14 1.75-3.16 1.83-3.21-1-1.47-2.56-1.67-3.11-1.69-1.32-.13-2.58.78-3.25.78-.67 0-1.7-.76-2.8-.74-1.44.02-2.78.84-3.52 2.14-1.5 2.6-.38 6.45 1.08 8.56.72 1.04 1.58 2.2 2.7 2.16 1.08-.04 1.49-.7 2.8-.7 1.3 0 1.67.7 2.8.68 1.16-.02 1.9-1.06 2.6-2.1.82-1.2 1.16-2.36 1.18-2.42-.03-.01-2.26-.87-2.28-3.27zM16.9 5.6c.6-.73 1-1.75.88-2.77-.85.03-1.88.57-2.5 1.3-.55.63-1.03 1.65-.9 2.62.95.07 1.92-.48 2.52-1.15z" />
              </svg>

              {/* Play Store Logo */}
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 512 512" fill="black">
                <path d="M48,59.49v393a4.33,4.33,0,0,0,7.37,3.07L260,256,55.37,56.42A4.33,4.33,0,0,0,48,59.49Z" />
                <path d="M345.8,174,89.22,32.64c-4.42-2.4-8.62,3.58-5,7.06L285.19,231.93Z" />
                <path d="M84.08,472.39c-3.64,3.48.56,9.46,5,7.06L345.8,338l-60.61-57.95Z" />
                <path d="M449.38,231l-71.65-39.46L310.36,256l67.37,64.43L449.38,281C468.87,270.23,468.87,241.77,449.38,231Z" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FirstPage;