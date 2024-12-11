import "./Contactform.css";
import { FaReact } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
// import envelope from "../../assets/envelope.svg";

function contactform() {
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
            <label for="fname"></label>
            <input
              className="infield"
              type="text"
              id="fname"
              name="fname"
              placeholder="Name"
              size="32"
              required
            ></input>
          </div>

          <div className="email">
            <label for="fname"></label>
            <input
              className="infield"
              type="text"
              id="lname"
              name="lname"
              placeholder="Email"
              size="32"
              required
            ></input>
          </div>

          <div className="messageContainer">
            <textarea
              className="messageholder"
              placeholder="Message"
              cols="35"
              rows="15"
            ></textarea>
            <div>
              {/* <img className="mail" src = {contact} alt="mail" /> */}
            
            <div>
              <input className="submit" type="submit" value="Submit"></input>
            </div>
            </div>
            </div>
                  </div>
            {/* <div>
            <img src={envelope} alt="Mail Icon" />
            </div> */}
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

export default contactform;
