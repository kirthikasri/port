import React from "react";
import CV from "../../pics/CV.pdf";

const App = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#about" className="btn btn-primary">
        About me
      </a>
    </div>
  );
};
export default App;
