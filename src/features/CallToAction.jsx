import { useProjectModal } from '../context/ProjectModalContext';
import './CallToAction.css';

const CallToAction = () => {
  const { openModal } = useProjectModal();

  return (
    <section id="cta" className="cta-section section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta-wrapper">
              <div className="cta-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="cta-content">
                    <span className="cta-sub-title">
                      <i className="fa-solid fa-rocket"></i>
                      Ready to Get Started?
                    </span>
                    <h2 className="cta-title">
                      Let's Build Something <span className="text-gradient">Amazing Together</span>
                    </h2>
                    <p className="cta-description">
                      Transform your ideas into reality with our expert team. Get a free consultation
                      and discover how we can help your business grow.
                    </p>
                    <div className="cta-features">
                      <div className="cta-feature-item">
                        <i className="fa-solid fa-check-circle"></i>
                        <span>Free Consultation</span>
                      </div>
                      <div className="cta-feature-item">
                        <i className="fa-solid fa-check-circle"></i>
                        <span>No Hidden Costs</span>
                      </div>
                      <div className="cta-feature-item">
                        <i className="fa-solid fa-check-circle"></i>
                        <span>Quick Response Time</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="cta-actions">
                    <a href="tel:+919944473370" className="cta-contact-link">
                      <div className="contact-icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="contact-info">
                        <span className="contact-label">Call Us Now</span>
                        <span className="contact-value">+91 9944473370</span>
                      </div>
                    </a>

                    <a href="mailto:info@metagensoft.com" className="cta-contact-link">
                      <div className="contact-icon">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div className="contact-info">
                        <span className="contact-label">Email Us</span>
                        <span className="contact-value">info@metagensoft.com</span>
                      </div>
                    </a>

                    <button type="button" className="button-v2 cta-trigger-btn" onClick={openModal}>
                      Start Your Project
                      <span className="button-icon">
                        <i className="fa-regular fa-arrow-up-right"></i>
                        <i className="fa-regular fa-arrow-up-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
