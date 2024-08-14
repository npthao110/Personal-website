import React, { useRef } from "react";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    window.Email.send({
      SecureToken: "YOUR_SECURE_TOKEN",  
      To: "n.p.thao.110@gmail.com",  
      From: e.target.user_email.value,  
      Subject: e.target.subject.value,  
      Body: `Name: ${e.target.user_name.value}<br/> Email: ${e.target.user_email.value}<br/> Message: ${e.target.message.value}`
    })
      .then((message) => alert("Message sent successfully!"))
      .catch((error) => alert("Failed to send the message, please try again."));
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="user_name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="user_email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="Insert your subject"
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
