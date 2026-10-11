import { useState } from 'react';
import './Navbar.css';

import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import homeImg from '../../assets/home.png';
import menu from '../../assets/cil-hamburger-menu.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="nav">
      <div className="nav-left">
        <div className="logo-div">
          <img src={logo} alt="" className="logoImg" />
          <span className="logo-name">zaheerBuilds</span>
        </div>
        <nav className="navList">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Networks</a>
          <a href="#">Events</a>
        </nav>
      </div>
      <div className="nav-right">
        <div className="srch-bar">
          <img src={search} className="srchImg" alt="Search" />
          <input type="text" placeholder="Search something" />
        </div>
        <button className="btn-join-now">Join Now</button>
        <div className="profile">
          <img src={homeImg} alt="" className="profileImg" />
        </div>
      </div>
      <div className="hamburgerMenu" onClick={() => setIsOpen(!isOpen)}>
        <img src={menu} alt="" />
      </div>
      {isOpen && (
        <div className="mobileMenu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Networks</a>
          <a href="#">Events</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;