import React from 'react';
import deploymentImg from '../assets/images/Deployment & s1.png';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '250+', label: 'Happy Clients' },
    { number: '50+', label: 'Expert Team' },
    { number: '10+', label: 'Years Experience' }
  ];

  const features = [
    {
      icon: 'fi-rr-rocket',
      title: 'Innovation First',
      description: 'Cutting-edge solutions using latest technologies'
    },
    {
      icon: 'fi-rr-shield-check',
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes'
    },
    {
      icon: 'fi-rr-clock',
      title: 'On-Time Delivery',
      description: 'Meeting deadlines with precision and efficiency'
    },
    {
      icon: 'fi-rr-headset',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance'
    }
  ];

  return (
    <section id="about" className="about-section section section-padding">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Column - Content */}
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-header">
                <span className="section-sub-title">
                  <i className="fa-solid fa-asterisk"></i>
                  About Our Company
                  <i className="fa-solid fa-asterisk"></i>
                </span>
                <h2 className="section-title">
                  Transform Your Business with 
                  <span className="text-gradient"> Digital Innovation</span>
                </h2>
              </div>
              
              <p className="about-description">
                We are a leading IT solutions company specializing in custom software development, 
                cloud solutions, and digital transformation. With over 10 years of experience, 
                we've helped businesses across the globe achieve their technology goals.
              </p>

              <p className="about-description">
                Our team of expert developers, designers, and strategists work together to deliver 
                innovative solutions that drive growth and success for your business.
              </p>

              {/* Stats */}
              <div className="stats-wrapper">
                <div className="row g-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="col-6 col-sm-3">
                      <div className="stat-item">
                        <h3 className="stat-number">{stat.number}</h3>
                        <p className="stat-label">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#contact" className="button-v2">
                Get Started
                <span className="button-icon">
                  <i className="fa-regular fa-arrow-up-right"></i>
                  <i className="fa-regular fa-arrow-up-right"></i>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="col-lg-6">
            <div className="about-features">
              <div className="row g-4">
                {features.map((feature, index) => (
                  <div key={index} className="col-sm-6">
                    <div className="feature-card">
                      <div className="feature-icon">
                        <i className={feature.icon}></i>
                      </div>
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="about-image">
                <img 
                  src={deploymentImg}
                  alt="Deployment"
                  className="img-fluid"
                />
                <div className="image-badge">
                  <div className="badge-icon">
                    <i className="fi-rr-trophy"></i>
                  </div>
                  <div className="badge-content">
                    <h5>Award Winning</h5>
                    <p>IT Solutions Provider</p>
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

export default About;
