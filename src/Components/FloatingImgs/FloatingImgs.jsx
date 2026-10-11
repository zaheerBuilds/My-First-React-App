import './FloatingImgs.css';

import manImg from '../../assets/man-presenting.webp';
import studentImg from '../../assets/student-tablet.webp';
import achievementImg from '../../assets/achievement.webp';

import useScrollAnimation from '../useScrollAnimation';

const FloatingImgs = () => {
  const achievImgRef = useScrollAnimation({ threshold: 0.99 });
  const studentImgRef = useScrollAnimation({ threshold: 0.99 });
  const manImgRef = useScrollAnimation({ threshold: 0.05 });
  const textGetRef = useScrollAnimation({ threshold: 0.005 });
  const choicesContentRef = useScrollAnimation({ threshold: 0.005 });
  const floatingImgsParaSecondRef = useScrollAnimation({ threshold: 0.005 });
  const spanHeadingRef = useScrollAnimation({ threshold: 0.005 });
  const floatImgsParaFirstRef = useScrollAnimation({ threshold: 0.005 });

  return (
    <section id="floatingImgs">
      <div className="img-section">
        <div className="img-wrapper">
          <img src={studentImg} className="studentImg delay-300" ref={studentImgRef} />
          <img src={achievementImg} className="achievImg" ref={achievImgRef} />
          <img src={manImg} className="manImg" ref={manImgRef} />
        </div>
      </div>
      <div className="text-section">
        <div className="text-wrapper">
          <div className="text-contents">
            <div className="text-content-para">
              <span className="span-heading" ref={spanHeadingRef}>WHAT WE OFFER</span>
              <p className="floatingImgs-para-1" ref={floatImgsParaFirstRef}>Personalized learning for your ambitions</p>
              <p className="floatingImgs-para-2" ref={floatingImgsParaSecondRef}>Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut</p>
            </div>
            <div className="choices-contents" ref={choicesContentRef}>
              <ul>
                <li>Skill-based instruction</li>
                <li>Analytics and insights</li>
                <li>Global certification</li>
                <li>Customizable courses</li>
              </ul>
            </div>
            <div className="text-get-started-div" ref={textGetRef}>
              <div className="div-left">
                <span>Still have questions?</span>
                <p>Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p>
              </div>
              <div className="div-right">
                <button className="div-right-btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingImgs;