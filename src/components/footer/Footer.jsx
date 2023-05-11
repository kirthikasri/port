import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const App = () => {
  return (
    <footer>
      KIRUTHIGA SRI
      <ul className="permalinks">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="contact"> contact</a>
        </li>
      </ul>
      <div className="footer_social">
        <a href="https://www.linkedin.com/in/kiruthiga-sri-d-a9b41b222/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/kirthikasri">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/_._kirthi/">
          <BsInstagram />
        </a>
      </div>
      <div className="copyright">
        <small>&copy; Kiruthiga_sri. All rights reserved</small>
      </div>
    </footer>
  );
};
export default App;
