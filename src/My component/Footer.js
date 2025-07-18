import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="bg-dark text-white pt-5 pb-4" data-aos="fade-up">
      <div className="container text-md-left">
        <div className="row text-md-left">

          {/* App Info */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Easy Trip</h5>
            <p>
              Your journey starts here—download the Easy Trip app now and unlock seamless bookings,
              personalized adventures, and exclusive travel deals. It's time to explore more, stress less.
            </p>

            {/* About Us & Blogs */}
            <div className="mt-3 d-flex justify-content-center flex-wrap gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link className="btn btn-outline-light btn-sm" to="/aboutus">
                  <i className="fab fa-google-play me-1"></i> About Us
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/blogs" className="btn btn-outline-light btn-sm">
                  <i className="fab fa-apple me-1"></i> Our Blogs
                </Link>
              </motion.div>
            </div>
          </div>

          {/* App Downloads */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Download Our App</h5>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mb-2">
              <a href="#" className="btn btn-outline-light btn-sm me-2">
                <i className="fab fa-google-play me-1"></i> Google Play
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#" className="btn btn-outline-light btn-sm">
                <i className="fab fa-apple me-1"></i> App Store
              </a>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Follow Us</h5>
            <div className="d-flex flex-column gap-2">
              <motion.a href="#" className="text-white" whileHover={{ scale: 1.05 }}>
                <i className="fab fa-facebook-f me-2"></i> Facebook
              </motion.a>
              <motion.a href="#" className="text-white" whileHover={{ scale: 1.05 }}>
                <i className="fab fa-instagram me-2"></i> Instagram
              </motion.a>
              <motion.a href="#" className="text-white" whileHover={{ scale: 1.05 }}>
                <i className="fab fa-twitter me-2"></i> Twitter
              </motion.a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>© 2025 Easy Trip. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
