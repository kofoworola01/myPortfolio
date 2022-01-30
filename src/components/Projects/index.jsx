import React from "react";
import CoffeeShop from "../../images/coffee.png";
import Dummy from "../../images/pc-flower-pot.jpeg";
import Portfolio from "../../images/portfolio.png";
import TodoApp from "../../images/todo-app.png";

import "./projects.css";

const Project = () => {
  return (
    <div style={{background: '#eaedef', padding: 20}}>
      <div>
        <h2 className='projectTitle'>My Projects</h2>
        <div className='projectWrapper'>
          <div className='imgWrapper'>
            <img src={CoffeeShop} className='imgContainer' alt='' />
          </div>
          <div className='imgWrapper'>
            <img src={TodoApp} className='imgContainer' alt='' />
          </div>
          <div className='imgWrapper'>
            <img src={TodoApp} className='imgContainer' alt='' />
          </div>
          <div className='imgWrapper'>
            <img src={Portfolio} className='imgContainer' alt='' />
          </div>
          <div className='imgWrapper'>
            <img src={Dummy} className='imgContainer' alt='' />
          </div>
          <div className='imgWrapper'>
            <img src={Dummy} className='imgContainer' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
