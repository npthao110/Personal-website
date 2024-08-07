import React from "react";
import "./about.css";
import Image from "../../assets/cat-profile3.png";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Thao, a junior in CS major and Math minor at Texas Tech University. 
              I'm a passionate and driven student with a love for all things tech. 
              With a deep interest in software engineering and machine learning/AI, 
              I constantly seek to push the boundaries of what's possible in the digital world. 
              From hackathons, group projects to research projects, 
              I'm dedicated to leveraging technology to solve real-world problems. 
              I'm excited to share my journey, projects, and aspirations with you.
            </p>
            <a href="https://drive.google.com/file/d/1RRhbGSQszADrv_X2hv4frVKbEzXqcEMO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">
              My Resume
            </a>
          </div>
          
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
