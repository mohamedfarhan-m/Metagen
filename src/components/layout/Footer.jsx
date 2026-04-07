import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SpiderWebAnimation from '../../utils/SpiderWebAnimation';
import './Footer.css';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const webAnimationRef = useRef(null);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Initialize spider web animation
      const canvas = document.getElementById('footer-canvas');
      if (canvas) {
        webAnimationRef.current = new SpiderWebAnimation('footer-canvas');
      }
    }, 100);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      if (webAnimationRef.current) {
        webAnimationRef.current.destroy();
      }
    };
  }, []);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Form submitted!');
    closeModal();
  };

  return (
    <footer id="contact" className="footer-two section section-padding-top fade-anim">
      {/* Spider Web Animation Background */}
      <div id="footer-canvas" className="footer-canvas"></div>
      
      <div className="shape-1">
        <img src="/assets/images/footer/footer-2-shape-1.png" alt="footer-2-shape-1" />
      </div>
      <div className="shape-2">
        <img src="/assets/images/footer/footer-2-shape-2.png" alt="footer-2-shape-2" />
      </div>
      <div className="footer-two__circles">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <div className="inner-circle"></div>
      </div>
      
     

      {/* Main Footer Content */}
      <div className="footer-two__main">
        <div className="container-fluid px-5">
          <div className="footer-two__main-inner">
            <div className="row g-4 gy-5 justify-content-between">
              
              {/* About Section */}
              <div className="col-md-6 col-lg-6 col-xxl-3">
                <div className="footer-info">
                  <h2 className="footer-title title-highlight">
                    <br /> Join Us
                  </h2>
                  <p className="footer-desc">
                    Transform your business with cutting-edge IT solutions. Our team of experienced developers will guide you every step of the way with comprehensive support.
                  </p>
                </div>
              </div>

              {/* Our Services */}
              <div className="col-md-6 col-lg-3 col-xxl-2">
                <div className="footer-links-group">
                  <h5 className="footer-title">Our Services</h5>
                  <div className="link-list">
                    <ul>
                      <li><a href="/service">Web Development</a></li>
                      <li><a href="/service">Mobile Apps</a></li>
                      <li><a href="/service">Cloud Solutions</a></li>
                      <li><a href="/service">AI & ML</a></li>
                      <li><a href="/service">DevOps</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="col-md-6 col-lg-3 col-xxl-2">
                <div className="footer-links-group">
                  <h5 className="footer-title">Resources</h5>
                  <div className="link-list">
                    <ul>
                      <li><a href="/contact">Contact Us</a></li>
                      <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                      <li><a href="/blog">Blog Post</a></li>
                      <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                      <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                      <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Our Offices */}
              <div className="col-md-6 col-lg-12 col-xxl-3">
                <div className="footer-links-group">
                  <h5 className="footer-title">Our Offices</h5>
                  <div className="office-list">
                    <div className="office-item">
                      <span className="label">Head Office – India</span>
                      <h6 className="location">
                        NAFA - BARTER Madhapur, Kavuri Hills, Hyderabad
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="contact-modal-overlay" onClick={closeModal}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div className="modal-header">
              <h2 className="modal-title">Let's Work Together</h2>
              <p className="modal-subtitle">Transform your ideas into reality</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="fa-regular fa-user"></i> Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fa-regular fa-envelope"></i> Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="fa-regular fa-phone"></i> Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="+1 234 567 8900" 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">
                    <i className="fa-regular fa-briefcase"></i> Service Needed
                  </label>
                  <select id="service" name="service" required>
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Apps</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="ai">AI & ML</option>
                    <option value="devops">DevOps</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <i className="fa-regular fa-message"></i> Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <span>Send Message</span>
                <i className="fa-regular fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Copyright Section */}
      <div className="footer-copyright">
        <div className="container-fluid px-5">
          <div className="copyright-content">
            <p>© 2026 <span className="company-name">MetaGen Technology</span>. All Rights Reserved. | Crafted with <i className="fa-solid fa-heart"></i> by IT Experts</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
