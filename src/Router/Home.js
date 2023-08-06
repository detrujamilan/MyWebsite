import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = ({ darktheme, setDarkTheme }) => {
  return (
    <div id="Home">
      <Header darktheme={darktheme} setDarkTheme={setDarkTheme} />
      {/* <About /> */}
      <Experience darktheme={darktheme} />
      <Services darktheme={darktheme} />
      <Contact darktheme={darktheme} />
      <Footer darktheme={darktheme} />
    </div>
  );
};

export default Home;
