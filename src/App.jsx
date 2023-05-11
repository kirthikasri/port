import "./styles.css";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";

import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />

      <Contact />
      <Footer />
    </>
  );
};
export default App;
