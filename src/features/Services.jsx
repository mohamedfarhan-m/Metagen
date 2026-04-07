import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    // Load Flaticon CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications with modern frameworks and scalable architecture',
      icon: 'fi-rr-browser',
      benefits: ['React, Angular, Vue.js', 'Node.js, Python, PHP', 'Responsive & SEO-friendly'],
      delay: '0.1'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions for iOS and Android',
      icon: 'fi-rr-mobile',
      benefits: ['React Native, Flutter', 'iOS & Android native', 'App Store deployment'],
      delay: '0.3'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure with AWS, Azure, and Google Cloud',
      icon: 'fi-rr-cloud',
      benefits: ['AWS, Azure, GCP', 'Auto-scaling & backup', 'Serverless architecture'],
      delay: '0.5'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive analytics solutions',
      icon: 'fi-rr-brain',
      benefits: ['TensorFlow, PyTorch', 'NLP & Computer Vision', 'Custom ML models'],
      delay: '0.7'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code',
      icon: 'fi-rr-settings',
      benefits: ['Docker, Kubernetes', 'Jenkins, GitLab CI', 'Infrastructure as Code'],
      delay: '0.9'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design with modern interfaces and experiences',
      icon: 'fi-rr-paint-brush',
      benefits: ['Figma, Adobe XD', 'Prototyping & wireframes', 'User research & testing'],
      delay: '1.1'
    }
  ];

  return (
    <section id="services" className="service-two section section-padding">
      <div className="service-two__circles">
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
      <div className="shape-1">
        <img src="/assets/images/service/service-shape-1.png" alt="shape" />
      </div>
      <div className="container medium-container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-8">
            <div className="service-two__header section-header text-center">
              <span className="section-sub-title">
                <i className="fa-solid fa-asterisk"></i>
                IT Solutions & Services
                <i className="fa-solid fa-asterisk"></i>
              </span>
              <h2 className="section-title text-anim">
                Innovative Software & Technology Solutions
              </h2>
            </div>
          </div>
        </div>
        
        <div className="row g-4 row-padding-top">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-4 fade-anim"
              data-direction="bottom"
              data-delay={service.delay}
            >
              <div className="service-two__item">
                <div className="item-header">
                  <div className="header-content">
                    <h5 className="item-title line-clamp-2">
                      {service.title}
                    </h5>
                    <p className="item-description">
                      {service.description}
                    </p>
                  </div>

                  <div className="icon-box-wrapper">
                    <div className="icon-corner-assembly">
                      <div className="icon-connector left"></div>
                      <div className="icon-connector bottom"></div>

                      <div className="icon-box">
                        <i className={`fi ${service.icon} animated-icon`}></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="benefits-list">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="benefit-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 100 100"
                        fill="none"
                      >
                        <path
                          fill="currentColor"
                          d="M92.275 10.976c-17.47 5.735-39.743 21.072-60.28 47.344L19.857 44.85c-1.867-2.133-5.334-2.133-7.202 0L3.721 54.854c-1.734 2-1.6 4.934.267 6.668L31.46 87.927c2.267 2.134 6.001 1.6 7.602-1.2 14.67-26.54 30.407-46.277 57.08-68.95 3.2-2.8.266-8.135-3.868-6.8z"
                        ></path>
                      </svg>
                      {benefit}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
