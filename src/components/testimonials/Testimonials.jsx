import React from "react";
import "./testimonials.css";
import data from "./Data";
// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title">Testimonials</h2>

      <Swiper
        className="testimonials__container grid"
        // install Swiper modules
        modules={[Pagination, Navigation]} 
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} 
      >
        {data.map(({ id, image, title, subtitle, comment, link }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img src={image} alt={title} />
                </a>
              </div>
              <h3 className="testimonials__title">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              </h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">
                <div className="comment__content">
                  &ldquo;{comment}&rdquo;
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </section>
  );
};

export default Testimonials;