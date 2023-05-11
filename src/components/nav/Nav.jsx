import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TbNotebook } from "react-icons/tb";
/*import { MdMedicalServices } from "react-icons/md";*/
import { BiMessageSquareDetail } from "react-icons/bi";

const App = () => {
  return (
    <nav>
      <a href="#" className="active">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <TbNotebook />
      </a>

      <a href="#contact">
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
export default App;
