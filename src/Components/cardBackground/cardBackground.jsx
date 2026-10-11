import './cardBackground.css';

import jimadamsImg from '../../assets/jim-adams.avif';
import useScrollAnimation from '../useScrollAnimation';

const CardBackground = () => {
  const testimonalTopFirstRef = useScrollAnimation();
  const testimonalTopSecondParaRef = useScrollAnimation();
  const countsFirstDivFirstRef = useScrollAnimation();
  const countsFirstDivSecondtRef = useScrollAnimation();
  const countsSecondtDivFirstRef = useScrollAnimation();
  const countsSecondDivSecondtRef = useScrollAnimation();
  const imageWrapperRef = useScrollAnimation();

  return (
    <section id="background">
      <div className="testimonals">
        <div className="testimonals-top">
          <div className="testimonal-top-1" ref={testimonalTopFirstRef}>
            <span>OUR TESTIMONIALS</span>
          </div>
          <div className="testimonal-top-2">
            <p className="para" ref={testimonalTopSecondParaRef}>
              Trusted by our successful students
            </p>
            <div className="counts-div">
              <div className="counts-div-1 delay-300" ref={countsFirstDivFirstRef}>
                <span>70M</span>
              </div>
              <div className="counts-div-2" ref={countsFirstDivSecondtRef}>
                <span>SUCCESSFUL STUDENTS</span>
              </div>
            </div>
            <div className="counts-div">
              <div className="counts-div-2-1 delay-300" ref={countsSecondtDivFirstRef}>
                <span>25K</span>
              </div>
              <div className="counts-div-2-2" ref={countsSecondDivSecondtRef}>
                <span>GLOBAL JOB PLACEMENTS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonals-bottom">
          <div className="image-wrapper" ref={imageWrapperRef}>
            <img src={jimadamsImg} alt="" />
          </div>
          <div className="text-wrapper">
            <p>
              “Lorem ipsum dolor sit amet consectetur. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet.”
            </p>
            <span className="person-name">Jim Adams</span>
            <span className="person-skill">DESIGNER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardBackground;