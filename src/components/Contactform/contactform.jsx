import { useState } from "react";
import "./Contactform.css";
import { FaReact } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function ContactForm() { 

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailValue)) {
      setError("Please enter a valid email (e.g., user@example.com)");
    } else {
      setError("");
    }
  };

  return (
    <section className="contactContainer">
      <form
        className="box"
        action="https://formsubmit.co/charles.easton@alumni.utoronto.ca"
        method="POST"
      >
        <div className="header-info">
          <h2 className="skill-title">Contact Me </h2>
          <p className="note">
            {" "}
            Please leave a note and I will get back to you within 48 hours.
          </p>
        </div>

        <div className="input-info">
          <div className="formContainer">
            <div>
              <label htmlFor="fname"></label>
              <input
                className="infield"
                type="text"
                id="fname"
                name="fname"
                placeholder="Name"
                size="32"
                required
              />
            </div>

            <div className="email">
              <label htmlFor="email"></label>
              <input
                className="infield"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                size="32"
                required
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail} 
              />
              {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
            </div>

            <div className="messageContainer">
              <textarea
                className="messageholder"
                name="message"
                placeholder="Your Message"
                cols="35"
                rows="15"
                required
              ></textarea>

              <div>
                <button className="submit" disabled={error}>Submit</button>
              </div>
            </div>
          </div> 
        </div>
      </form>

      <div className="bottom">
        <div className="socials">
          <div>
            <a
              href="https://www.linkedin.com/in/charles-easton1/"
              className="social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={50} color="#0072b1" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Charlesdigital"
              className="social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={50} color="white" />
            </a>
          </div>
        </div>
        Built with React <FaReact size={20} color="#61DBFB" />
      </div>
    </section>
  );
}

export default ContactForm; 
