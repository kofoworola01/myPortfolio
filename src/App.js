import React from 'react';
import Header from './components/Header';
import About from './components/About'
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'


const App = () => {
  return (
    <div className='App'>
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
