import { useEffect } from 'react';

const Technologies = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css';
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  const techCategories = [
    {
      category: 'Frontend',
      color: '#E2252B',
      technologies: [
        { name: 'React', iconClass: 'devicon-react-original colored' },
        { name: 'Vue.js', iconClass: 'devicon-vuejs-plain colored' },
        { name: 'Angular', iconClass: 'devicon-angularjs-plain colored' },
        { name: 'Next.js', iconClass: 'devicon-nextjs-plain' }
      ]
    },
    {
      category: 'Backend',
      color: '#303030',
      technologies: [
        { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
        { name: 'Python', iconClass: 'devicon-python-plain colored' },
        { name: 'Java', iconClass: 'devicon-java-plain colored' },
        { name: '.NET', iconClass: 'devicon-dotnetcore-plain colored' }
      ]
    },
    {
      category: 'Mobile',
      color: '#E2252B',
      technologies: [
        { name: 'React Native', iconClass: 'devicon-react-original colored' },
        { name: 'Flutter', iconClass: 'devicon-flutter-plain colored' },
        { name: 'iOS (Swift)', iconClass: 'devicon-swift-plain colored' },
        { name: 'Android', iconClass: 'devicon-android-plain colored' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      color: '#303030',
      technologies: [
        { name: 'AWS', iconClass: 'devicon-amazonwebservices-plain-wordmark colored' },
        { name: 'Azure', iconClass: 'devicon-azure-plain colored' },
        { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
        { name: 'Kubernetes', iconClass: 'devicon-kubernetes-plain colored' }
      ]
    },
    {
      category: 'Database',
      color: '#E2252B',
      technologies: [
        { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
        { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
        { name: 'MySQL', iconClass: 'devicon-mysql-original colored' },
        { name: 'Redis', iconClass: 'devicon-redis-plain colored' }
      ]
    },
    {
      category: 'AI & ML',
      color: '#303030',
      technologies: [
        { name: 'TensorFlow', iconClass: 'devicon-tensorflow-original colored' },
        { name: 'PyTorch', iconClass: 'devicon-pytorch-original colored' },
        { name: 'OpenCV', iconClass: 'devicon-opencv-plain colored' },
        { name: 'Jupyter', iconClass: 'devicon-jupyter-plain-wordmark colored' }
      ]
    }
  ];

  return (
    <section id="technologies" className="technologies-section section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <span className="section-sub-title">
                <i className="fa-solid fa-asterisk"></i>
                Our Technology Stack
                <i className="fa-solid fa-asterisk"></i>
              </span>
              <h2 className="section-title">
                We Work With <span className="text-gradient">Modern Technologies</span>
              </h2>
              <p className="section-description">
                Leveraging the latest and most powerful technologies to build robust, scalable solutions
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-4">
          {techCategories.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
              <div className="tech-category-card">
                <div className="category-header" style={{ borderColor: category.color }}>
                  <h3 className="category-title" style={{ color: category.color }}>
                    {category.category}
                  </h3>
                </div>
                <div className="tech-list">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="tech-item">
                      <i className={`tech-icon ${tech.iconClass}`}></i>
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="tech-cta-text">
              Need a technology not listed here? <a href="#contact">Let's discuss your requirements</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
