import './Hero.css';

import girlImg from '../../assets/girl-img.webp';
import yellowDot from '../../assets/yellow-dot.svg';
import blueCircle from '../../assets/blue-circle.svg';
import trustedbyImg from '../../assets/trustedby.avif';
import achievementImg from '../../assets/achievement.webp';
import shopifyImg from '../../assets/Shopia.svg';
import aehImg from '../../assets/Aeh.svg';
import carlaImg from '../../assets/Carla.svg';
import bImg from '../../assets/B.svg';
import concluasImg from '../../assets/Concluas.svg';
import lefeImg from '../../assets/Lefe.svg';

import useScrollAnimation from '../useScrollAnimation';

const Hero = () => {
  const paraRef = useScrollAnimation({ threshold: 0.1 });
  const marqRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="hero">
      <img src={yellowDot} alt="" className="yellowDot1" />
      <img src={yellowDot} alt="" className="yellowDot2" />
      <img src={blueCircle} alt="" className="blueCircle" />

      <div className="hero-container">
        <div className="hero-text">
          <span className="hero-badge">ONLINE LEARNING</span>
          <h1 className="hero-title">
            More than <span className="highlight">25000+</span> education courses online
          </h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis excepturi iure nihil laborum.
          </p>
          <button className="hero-btn">Get Started</button>
        </div>

        <div className="hero-image">
          <img src={girlImg} alt="Student learning illustration" />
          <div className="floating-badges">
            <img src={achievementImg} alt="Achievement" className="badge badge-1" />
            <img src={trustedbyImg} alt="Trusted by" className="badge badge-2" />
          </div>
        </div>
      </div>
      <br />
      <div className="marqTagDiv" ref={marqRef}>
        <p className="marqTag-para delay-200" ref={paraRef}>Learn from 350+ leading universities and companies with us</p>
        <div className="scroller">
          <div className="scroller__inner">
            <img src={shopifyImg} alt="" />
            <img src={bImg} alt="" />
            <img src={aehImg} alt="" />
            <img src={lefeImg} alt="" />
            <img src={concluasImg} alt="" />
            <img src={carlaImg} alt="" />
            <img src={shopifyImg} alt="" />
            <img src={bImg} alt="" />
            <img src={aehImg} alt="" />
            <img src={lefeImg} alt="" />
            <img src={concluasImg} alt="" />
            <img src={carlaImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
