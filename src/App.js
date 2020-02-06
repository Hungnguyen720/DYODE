import React from 'react';
import Banner  from './components/Banner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Newarrivals from './components/Newarrivals';
import './App.css';

function App() {
  return (
    <div className="App">
        <Banner></Banner>
        <Navbar></Navbar>
        <Hero></Hero>
        <Categories></Categories>
        <Newarrivals></Newarrivals>
    </div>
  );
}

export default App;
