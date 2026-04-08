import './Header.css';
import headerLogo from '../../assets/images/logoupdated.png';

const Header = ({ onHamburgerClick }) => {
  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <a href="/" className="header-logo">
          <img
            src={headerLogo}
            alt="MetaGen Technology"
            className="logo-img"
          />
        </a>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#hero">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#process">PROCESS</a></li>
            <li><a href="#blogs">BLOGS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className="header-right">

          {/* Social Links */}
          <div className="header-social-links">
            <a href="#" className="header-social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="header-social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="header-social-icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" className="header-social-icon">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger-menu"
            onClick={onHamburgerClick}
            aria-label="Open Menu"
          >
            <span className="hamburger-icon"></span>
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;