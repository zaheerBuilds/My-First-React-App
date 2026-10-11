import './Skill.css';
import { categories } from '../data/categories';
import useScrollAnimation from '../useScrollAnimation';

import whiteShirtGirlImg from '../../assets/white-shirt-girl.webp';
import elearnaVideo from '../../assets/elearnvideo.mp4';

const Skill = () => {
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();

  return (
    <section id="skill">
      <div className="headings">
        <h3>TOP CATEGORIES</h3>
        <p>Discover leading categories to elevate your journey</p>
      </div>

      <div className="cards_div">
        {categories.map((item) => (
          <div className="cards" key={item.title}>
            <img src={item.icon} alt={item.title} className="card_imgs" />
            <h4>{item.title}</h4>
            <span>{item.courses} courses</span>
          </div>
        ))}
      </div>

      <div className="image_card_div">
        <div className="image_card_left delay-100" ref={card1Ref}>
          <div className="content_left">
            <span>Quick access to the popular courses</span>
            <button>Veiw Course</button>
          </div>
          <img src={whiteShirtGirlImg} alt="" />
        </div>
        <div className="image_card_right delay-200" ref={card2Ref}>
          <div className="content_right">
            <span>Develop your skills online!</span>
            <button>Apply Now</button>
          </div>
          <video autoPlay loop controls>
            <source src={elearnaVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Skill;