import "./contact.css";
import "./media-queries.css";
import { Element } from "react-scroll";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useScrollReveal from "../../hooks/useScroll-reveal";

const Contact = () => {
  const form = useRef();

  const [show, setShow] = useState(false);
  const [className, setClassName] = useState("success");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uwtph8c",
        "template_7qpxqec",
        form.current,
        "xKUwC7Zd31kg4jHjR"
      )
      .then(
        (result) => {
          setClassName("success");
          setShow(true);
          setTimeout(() => setShow(false), 3000);
        },
        (error) => {
          setClassName("failed");
          setShow(true);
          setTimeout(() => setShow(false), 3000);
        }
      );

    form.current.reset();
  };

  const containerRef = useRef(null);
  const isVisible = useScrollReveal(containerRef);

  return (
    <Element name="contact" className="element">
      <div className={`contact`} ref={containerRef}>
        <h1
          className={`contact-title ${
            isVisible && "animate__animated animate__fadeInDown "
          }`}
        >
          Contact
        </h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className={`form ${
            isVisible && "animate__animated animate__zoomInUp "
          }`}
        >
          <div className="form-item">
            <label htmlFor="user_name" className="form-item-label">
              Name
            </label>
            <input
              autoComplete="off"
              placeholder="Write your name here"
              type="text"
              id="user_name"
              name="user_name"
              className="form-item-input"
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="user_email" className="form-item-label">
              Email
            </label>
            <input
              autoComplete="off"
              placeholder="Write you email here"
              type="email"
              id="user_email"
              name="user_email"
              className="form-item-input"
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="message" className="form-item-label">
              Message
            </label>
            <textarea
              placeholder="Write your review, feedback, or comments here. We appreciate your input and look forward to hearing from you!"
              id="message"
              name="message"
              className="form-item-input form-textarea"
              required
            />
          </div>
          <button type="submit" className="form-send-button">
            Send
          </button>
        </form>

        {show && (
          <div className={`modal ${className}`}>
            <img
              src={`/images/${className}.svg`}
              alt="modal icon"
              className="success-img"
            />

            <span>
              {className === "success"
                ? "Message sent succesfully!"
                : "Something went wrong!!"}
            </span>
          </div>
        )}
      </div>
    </Element>
  );
};

export default Contact;
