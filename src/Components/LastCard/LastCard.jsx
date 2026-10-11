import './LastCard.css';

import { courses, icons } from '../data/categories';
import logoImg from '../../assets/eLogo.svg';
import useScrollAnimation from '../useScrollAnimation';

const limitedCourses = courses.slice(0, 4);

const LastCard = () => {
  const lastCardCardsRef = useScrollAnimation({ threshold: 0.35 });
  const journeySpanRef = useScrollAnimation();
  const journeyHeadingRef = useScrollAnimation();
  const journeyParaRef = useScrollAnimation();
  const littleIconsRef = useScrollAnimation();
  const btnDivRef = useScrollAnimation({ threshold: 0.005 });
  const footerTopRef = useScrollAnimation();

  return (
    <div id="lastCard">
      <span className="lastCard-span">TRENDING COURSES</span>
      <h3 className="lastCard-h3">Explore our top programs</h3>
      <div className="lastCard-cards" ref={lastCardCardsRef}>
        {limitedCourses.map((card) => (
          <div className="lastCard-course_card" key={`${card.title}-${card.cardDesc}`}>
            <div className="lastCard-image_container">
              <img src={card.img} alt="" className="lastCard-courseCardImg" />
            </div>
            <div className="lastCard-cardDescriptions">
              <div className="lastCard-card_desc_div">
                <span className="lastCard-cardTitle">{card.title}</span>
                <span className="lastCard-cardDesc">{card.cardDesc}</span>
                <div className="lastCard-stars_div">
                  <div className="lastCard-stars_imgs">
                    <img src={card.star} alt="" />
                  </div>
                  <span>4.88 (210)</span>
                </div>
              </div>

              <div className="lastCard-free_div">
                {card.price === 0 ? <span>Free</span> : <span>${card.price}</span>}
              </div>
            </div>
            <div className="overlay-div">
              <span className="overlay-cardDesc">{card.cardDesc}</span>
              <div className="overlay-counts-div">
                <ul>
                  <li>{card.lessons} LESSONS</li>
                  <li>{card.enroll}K ENROLLED</li>
                </ul>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet..</p>
              <div className="overlay-ul">
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor sit</li>
                </ul>
              </div>
              <button>Course detail</button>
            </div>
          </div>
        ))}
      </div>
      <div className="journey-div">
        <span className="journey-span" ref={journeySpanRef}>WHY WE ARE</span>
        <h6 className="journey-heading" ref={journeyHeadingRef}>Elevate your professional journey</h6>
        <p className="journey-para" ref={journeyParaRef}>Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p>
        <div className="little-icons" ref={littleIconsRef}>
          {icons.map((item) => (
            <div className="icon" key={item.title}>
              <img src={item.img} alt="" />
              <span>{item.title}</span>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-section">
        <div className="btn-div" ref={btnDivRef}>
          <span>Are you ready to start your journey?</span>
          <div className="buttons-div">
            <button className="black-btn">Browse Course</button>
            <button className="transparent-btn">Become A Teacher</button>
          </div>
        </div>
        <div className="footer">
          <div className="footer-top" ref={footerTopRef}>
            <div className="footer-logo-div">
              <img src={logoImg} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.</p>
            </div>
            <div>
              <span>Quick Links</span>
              <ul>
                <li>Home</li>
                <li>Events</li>
                <li>Career</li>
                <li>Instructor</li>
              </ul>
            </div>
            <div>
              <span>Popular courses</span>
              <ul>
                <li>Finance</li>
                <li>Management</li>
                <li>Design</li>
                <li>Web Development</li>
              </ul>
            </div>
            <div>
              <span>Company</span>
              <ul>
                <li>About</li>
                <li>Courses</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Lincense</li>
                <li>Pricing</li>
                <li>404</li>
              </ul>
            </div>
            <div>
              <span>CMS</span>
              <ul>
                <li>Course detials</li>
                <li>Instructor</li>
                <li>Blog detials</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Designed by <span>ABDULLAH ZAHEER</span>
            </p>
            <p>
              Powered by <span>zaheerBuilds</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastCard;
