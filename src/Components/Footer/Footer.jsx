import './Footer.css';

import location from '../../assets/cil-location-pin.svg';
import contact from '../../assets/cil-contact.svg';
import google from '../../assets/cib-google.svg';
import youtube from '../../assets/cib-youtube.svg';
import adobe from '../../assets/cib-adobe-illustrator.svg';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footerAbove">
        <div className="div1">
          <h2 className="companyHeader">zaheerBuilds</h2>
          <p>
            Empowering Graduates, building bridges, and sustaining legacy of Kabul Polytechnic University.
          </p>
        </div>
        <div className="div2">
          <h2>Quick Links</h2>
          <a href="#">About Us</a>
          <a href="#">Board Members</a>
          <a href="#">Our History</a>
          <a href="#">Global Chapters</a>
        </div>
        <div className="div3">
          <h2>Community</h2>
          <a href="#">Join Now</a>
          <a href="#">Events Calender</a>
          <a href="#">Success Stories</a>
          <a href="#">Job Board</a>
        </div>
        <div className="div4">
          <h2>Contact</h2>
          <div>
            <img src={contact} alt="" />
            <p>contact@kpualumni.edu.af</p>
          </div>
          <div>
            <img src={location} alt="" />
            <p>Qargha road, Kabul, Afghanistan</p>
          </div>
          <div>
            <img src={google} alt="" />
            <img src={youtube} alt="" />
            <img src={adobe} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className="footerBelow">
        <p>2026 Kabul Polytechnic Alumni Association. All Rights reserved.</p>
        <div className="footerBelowRight">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;