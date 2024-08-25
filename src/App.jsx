import React from "react";
import Header from "./components/Header";
import Home from "./sections/Home";
import Section2 from "./sections/section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
    <div className=" overflow-x-hidden">
      <Header />
      <Home />
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>

    </div>
    <Footer/>
    </>
  );
};

export default App;
