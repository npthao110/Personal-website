import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/npthao110_/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      
      <a
        href="https://www.linkedin.com/in/npthao110/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a
        href="https://github.com/npthao110"
        className="home__social-link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a
        href="mailto:n.p.thao.110@gmail.com"
        className="home__social-link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="fa-regular fa-envelope"></i>
      </a>

    </div>
  );
};

export default HeaderSocials;
