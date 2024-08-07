import React from "react";

const Card = (props) => {
  return (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      <span className="timeline__institution">
        <a href={props.institutionUrl} target="_blank" rel="noopener noreferrer">
          {props.institution}
        </a>
      </span>
      <p className="timeline__text">{props.desc}</p>
    </div>
  );
};

export default Card;
