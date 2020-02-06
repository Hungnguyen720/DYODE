import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Newarrivals from "./components/Newarrivals";
import Subhero from "./components/Subhero";
import Social from "./components/Social";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

import "./App.css";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Navbar></Navbar>
      <Hero></Hero>
      <div class="container">
        <Categories></Categories>
        <Newarrivals></Newarrivals>
      </div>
      <Subhero></Subhero>
      <Social></Social>
      <Signup></Signup>
      <Footer></Footer>
    </div>
  );
}

export default App;
