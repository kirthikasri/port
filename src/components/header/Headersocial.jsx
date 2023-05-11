import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const App = () => {
  return (
    <div className="header_social">
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
  );
};
export default App;
