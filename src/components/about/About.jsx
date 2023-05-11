import React from "react";
import "./about.css";
import ME from "../../pics/me.png";
import { FaAward } from "react-icons/fa";
import { BiHeadphone } from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";

const App = () => {
  return (
    <section id="about">
      <h5> Get to know</h5>
      <h2> About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="aboutimage" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small> 2+ Years working</small>
            </article>
            <article className="about_card">
              <FaFolderOpen className="about_icon" />
              <h5>Completed</h5>
              <small> 2+ projects</small>
            </article>
            <article className="about_card">
              <BiHeadphone className="about_icon" />
              <h5>Support</h5>
              <small> 2+ 24/7 online</small>
            </article>
          </div>
          <p className="about-card">
            Electronics and communication Student at VIT Chennai, I created some
            web pages . I believe blockchain is an amazing ripening technology
            with huge potential in the coming decade. Currently, I'm learning
            Data Structures and Algorithm, BLockchain and Web development
          </p>
          <a href="#contact" className="btn btn-primary">
            contact me
          </a>
        </div>
      </div>
    </section>
  );
};
export default App;
