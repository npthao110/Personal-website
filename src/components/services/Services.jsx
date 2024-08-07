import React from "react";
import "./services.css";

const data = [
  {
    id: 1,
    icon: 'code-alt',
    title: "Programming Languages",
    description:
      "Python, Java, C, C++, HTML, CSS, SQL, JavaScript",
  },
  {
    id: 2,
    icon: 'terminal',
    title: "Frameworks & Libraries",
    description:
      "Spring, Django, React, Streamlit, TensorFlow, Keras, Scikit-learn, NumPy, Pandas, Matplotlib",
  },
  {
    id: 3,
    icon: 'git-branch',
    title: "Technologies & Tools",
    description:
      "MySQL, Maven, Docker, Kubernetes, RabbitMQ, Git, Linux, APIs, Postman, Tableau, IntelliJ, Eclipse",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Skills</h2>

      <div className="services__container grid">
        {data.map(({ id, icon, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <box-icon name={icon} className="services__icon"></box-icon>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
