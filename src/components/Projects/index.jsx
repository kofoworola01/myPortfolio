import React from "react";
import CoffeeShop from "../../images/coffee.png";
import Dummy from "../../images/pc-flower-pot.jpeg";
import Portfolio from "../../images/portfolio.png";
import TodoApp from "../../images/todo-app.png";
import GlamifiedApp from '../../images/glamified.png'
import Journal from '../../images/journal.png'

import "./projects.css";

const ProjectsList = [
  {
    name: Journal
  },
  {
    name: CoffeeShop
  },
  {
    name: GlamifiedApp,
    url: 'https://glamified.netlify.app'
  },
  {
    name: Portfolio,
    url: 'https://kofoworola.netlify.app'
  },
  {
    name: TodoApp
  },
  {
    name: Dummy
  },
]

const Project = () => {
  return (
    <div style={{background: '#eaedef', padding: 20, margin: 30}}>
      <div>
        <h2 className='projectTitle'>My Projects</h2>
        <div className='projectWrapper'>
          {ProjectsList.map((project) => (
            <div className='imgWrapper'>
              <img src={project.name} className='imgContainer' alt='' />
              <div className="overlay">
                <div className="text">
                  <button className="project-btn">
                    <a href={project.url} target="_blank">View Project</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
