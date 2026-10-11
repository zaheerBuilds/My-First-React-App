import './Courses.css';

import { courses } from '../data/categories';
import useScrollAnimation from '../useScrollAnimation';

const Courses = () => {
  const courseParaRef = useScrollAnimation();

  return (
    <div id="courses">
      <div className="course_headings">
        <span>ONLINE LEARNING</span>
        <h4>Top online courses</h4>
      </div>
      <div className="course_categories">
        <ul>
          <li>All Courses</li>
          <li>Design</li>
          <li>Development</li>
          <li>Management</li>
          <li>Finance</li>
        </ul>
      </div>
      <div className="courses_cards">
        {courses.map((card) => (
          <div className="course_card" key={`${card.title}-${card.desc}`}>
            <div className="image_container">
              <img src={card.img} alt="" className="courseCardImg" />
            </div>
            <div className="cardDescriptions">
              <div className="card_desc_div">
                <span className="cardTitle">{card.title}</span>
                <span className="cardDesc">{card.desc}</span>
                <div className="stars_div">
                  <div className="stars_imgs">
                    <img src={card.star} alt="" />
                  </div>
                  <span>4.88 (210)</span>
                </div>
              </div>
              <div className="lessonEnroll_div">
                <div className="lesson">
                  <span>{card.lessons} Lessons</span>
                </div>
                <div className="enroll">
                  <span>{card.enroll}k Enrolled</span>
                </div>
              </div>
              <div className="free_div">
                {card.price === 0 ? <span>Free</span> : <span>${card.price}</span>}
              </div>
              <div className="button_wrapper">
                {card.price === 0 ? (
                  <button className="course_detail_btn">Course Detail</button>
                ) : (
                  <button className="course_detail_btn">Buy Course</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="course_para" ref={courseParaRef}>
        <p>
          We assist you in finding the ideal tutor at no cost.
          <span> Browse all available courses</span>
        </p>
      </div>
    </div>
  );
};

export default Courses;