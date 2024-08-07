import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">6</h3>
          <span className="about__subtitle">Projects contributed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-book-open"></i>

        <div>
          <h3 className="about__title">10</h3>
          <span className="about__subtitle">CS Courses &  Certifications</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-check"></i>

        <div>
          <h3 className="about__title">200+</h3>
          <span className="about__subtitle">Leetcode problems solved</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-badge"></i>

        <div>
          <h3 className="about__title">1</h3>
          <span className="about__subtitle">Hackathon won</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
