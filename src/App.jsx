import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What we offer'/>
        <Programs />
        <About />
        <Title subTitle='Gallary' title='Campus photos'/>
      </div>
    </div>
  );
}

export default App;
