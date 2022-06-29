import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MyProjects from "../MyProjects/MyProjects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About />
      <MyProjects></MyProjects>
      <Skills />
      <Footer></Footer>
    </div>
  );
};

export default Home;
