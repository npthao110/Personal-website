import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
    <aside className={toggle ? "aside show-menu" : "aside"}>
      <a href="#home" className="nav__logo">
        <h1>TN<span class="dot">.</span></h1>
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="icon-folder"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#testimonials" className="nav__link">
                <i className="icon-bubbles"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2024</span>
      </div>
    </aside>

    <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
      <i className="icon-menu"></i>
    </div>
    </>
  );
};

export default Sidebar;
