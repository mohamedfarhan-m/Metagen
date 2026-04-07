import './Header.css';
import headerLogo from '../../assets/images/backgroundremoved.png';

const Header = ({ onHamburgerClick }) => {
  return (
    <header className="header section">
      <div className="container large-container">
        <div className="row">
          <div className="col-12">
            <div className="header__wrapper">
              <div className="header-logo">
                <a href="/">
                  <img src={headerLogo} alt="MetaGen Technology" style={{ objectFit: 'contain', display: 'block' }} />
                </a>
              </div>
              <div className="header__menus">
                <nav className="mobile-menu-active">
                  <ul>
                    <li>
                      <a href="#hero">HOME</a>
                    </li>
                    <li>
                      <a href="#about">ABOUT</a>
                    </li>
                    <li>
                      <a href="#services">SERVICES</a>
                    </li>
                    <li>
                      <a href="#process">PROCESS</a>
                    </li>
                    <li>
                      <a href="#blogs">BLOGS</a>
                    </li>
                    <li>
                      <a href="#contact">CONTACT</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header__right">
                <div className="header-social-hamburger">
                  <div className="header-social-links">
                    <a href="#" target="_blank" rel="noreferrer" className="header-social-icon" title="Facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="header-social-icon" title="Instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="header-social-icon" title="LinkedIn">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="header-social-icon" title="YouTube">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                  <button className="hamburger-menu" onClick={onHamburgerClick}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="7"
                        height="7"
                        rx="2"
                        stroke="black"
                        strokeWidth="2"
                      ></rect>
                      <rect
                        x="14"
                        y="3"
                        width="6.5"
                        height="6.5"
                        rx="1.5"
                        stroke="black"
                        strokeWidth="2"
                        transform="rotate(45 17 7)"
                      ></rect>
                      <rect
                        x="3"
                        y="14"
                        width="7"
                        height="7"
                        rx="2"
                        stroke="black"
                        strokeWidth="2"
                      ></rect>
                      <rect
                        x="14"
                        y="14"
                        width="7"
                        height="7"
                        rx="2"
                        stroke="black"
                        strokeWidth="2"
                      ></rect>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
