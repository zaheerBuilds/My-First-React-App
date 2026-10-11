import { useState, useEffect } from 'react';
import './Navbar.css';

import logo from '../assets/eLogo.svg';
import chevronBottom from '../assets/cil-chevron-bottom.svg';
import cart from '../assets/cart.svg';
import arrow from '../assets/tab-arrow-up-right.svg';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="navbar" className={`${isScrolled ? 'activeNavbar' : ''}`}>
      <div className="logo-div">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-list">
        <li className="nav-link">Home</li>
        <li className="nav-link1" onMouseEnter={() => setActiveMenu('courses')}>
          Courses
          <img className="chevronIcon" src={chevronBottom} alt="" />
          {activeMenu === 'courses' && (
            <div className="mega-menu" onMouseLeave={() => setActiveMenu(null)}>
              <div className="menu-left-side">
                <div className="menu-left-side-div1">
                  <h4>Free Courses</h4>
                  <p>Free learning resources for skill development</p>
                </div>
                <div className="menu-left-side-div2">
                  <h4>Paid Courses</h4>
                  <p>Courses are available upon purchase.(Requires login)</p>
                </div>
              </div>
              <div className="menu-column">
                <div className="menu-colum-cards">
                  <div>
                    <h4>FINANCE</h4>
                    <p>Understanding corporate finance and investments</p>
                  </div>
                  <div>
                    <h4>DESIGN</h4>
                    <p>Advanced photoshop techniques for designers</p>
                  </div>
                  <div>
                    <h4>MANAGEMENT</h4>
                    <p>Crisis management and problem-solving strategies</p>
                  </div>
                  <div>
                    <h4>DEVELOPEMENT</h4>
                    <p>Building single page applications with angular</p>
                  </div>
                </div>
                <div className="menu-column-lower">
                  <div className="colum-lower-div1">
                    <h4>Increase your potential earnings</h4>
                    <p>Lorem ipsum dolor sit amet scelerisque integer adipiscing velit sem sed.</p>
                  </div>
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          )}
        </li>
        <li className="nav-link2" onMouseEnter={() => setActiveMenu('pages')}>
          Pages
          <img className="chevronIcon" src={chevronBottom} alt="" />
          {activeMenu === 'pages' && (
            <div className="pages-dropdown-menu" onMouseLeave={() => setActiveMenu(null)}>
              <ul>
                <a href="#" className="dropdownlink">About</a>
                <a href="#" className="dropdownlink">Course</a>
                <a href="#" className="dropdownlink">FAQ</a>
                <a href="#" className="dropdownlink">Pricing</a>
                <a href="#" className="dropdownlink">Career</a>
                <a href="#" className="dropdownlink">Events</a>
                <a href="#" className="dropdownlink">Team</a>
              </ul>
            </div>
          )}
        </li>
        <li className="nav-link">Blog</li>
        <li className="nav-link">Contact</li>
      </ul>

      <div className="right-div">
        <div className="cart-div">
          <img src={cart} alt="" />
          <div className="yellowCircle">0</div>
        </div>

        <div className="login-register-div">
          <span>login</span>
          <span>|</span>
          <span>register</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;