import { useEffect } from 'react';
import { useProjectModal } from '../../context/ProjectModalContext';
import './Sidebar.css';
import sidebarLogo from '../../assets/images/backgroundremoved.png';

const Sidebar = ({ isOpen, onClose }) => {
  const { openModal } = useProjectModal();
  useEffect(() => {
    
    // Add/remove body class to prevent scrolling when sidebar is open
    if (isOpen) {
      document.body.classList.add('hamburger-active');
    } else {
      document.body.classList.remove('hamburger-active');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('hamburger-active');
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 9998,
            cursor: 'pointer'
          }}
        ></div>
      )}
      <div className={`hamburger-area ${isOpen ? 'opened' : ''}`} data-lenis-prevent>
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_top d-flex align-items-center justify-content-between">
            <div className="hamburger_logo">
              <a className="mobile_logo" href="/">
                <img src={sidebarLogo} alt="MetaGen Technology" style={{ maxHeight: '50px', objectFit: 'contain' }} />
              </a>
            </div>
            <div className="hamburger_close">
              <button className="hamburger_close_btn" onClick={onClose}>
                <i className="fa-thin fa-times"></i>
              </button>
            </div>
          </div>
          <div className="hamburger_search">
            <form method="get" action="/">
              <button type="submit">
                <i className="fal fa-search"></i>
              </button>
              <input
                type="search"
                autoComplete="off"
                name="s"
                defaultValue=""
                placeholder="Search here"
              />
            </form>
          </div>
          <div className="hamburger_menu">
            <div className="mobile_menu"></div>
          </div>
          <div className="hamburger-infos">
            <h4 className="hamburger-title">About MetaGen Technology</h4>
            <p className="hamburger-text">
              We are a leading IT solutions company specializing in custom software development, 
              cloud solutions, and digital transformation. With cutting-edge technology and expert team, 
              we deliver innovative solutions that drive business growth.
            </p>
            <button type="button" className="button-v2" onClick={() => { onClose(); openModal(); }}>
              Get A Quote
              <span className="button-icon">
                <i className="fa-regular fa-arrow-up-right"></i>
                <i className="fa-regular fa-arrow-up-right"></i>
              </span>
            </button>
            <div className="contact-items-grid">
              <div className="contact-item">
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-text">
                  <div className="text">
                    <a className="link" href="tel:+919944473370">
                      +91 9944473370
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <div className="text">
                    <a className="link" href="mailto:info@metagensoft.com">
                      info@metagensoft.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div className="contact-text">
                  <div className="text">
                    <a className="link" href="https://www.metagensoft.com">
                      www.metagensoft.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-text">
                  <div className="text">Madhapur, Hyderabad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
