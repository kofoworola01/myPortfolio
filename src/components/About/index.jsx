import React from 'react';
import aboutImage from '../../images/about-me.jpg'
import './about.css';

const About = () => {
  const skillSet = [
    {
      name: 'HTML',
      percentage: '80%',
      bar: '80%',
    },
    {
      name: 'CSS',
      percentage: '75%',
      bar: '75%',
    },
    {
      name: 'JAVASCRIPT',
      percentage: '70%',
      bar: '70%',
    },
    {
      name: 'REACT',
      percentage: '60%',
      bar: '60%',
    },
    {
      name: 'REACT-QUERY',
      percentage: '40%',
      bar: '40%',
    },
    {
      name: 'ANT DESIGN',
      percentage: '80%',
      bar: '80%',
    },
    {
      name: 'REDUX',
      percentage: '40%',
      bar: '40%',
    },
  ];

  return (
    <div>
      <div className='aboutWrapper'>
          <div className='aboutContent'>
            <h1 className='aboutTitle'>Who is this girl?</h1>
            I’m a self-taught Front End Developer with over a year hands-on
            experience developing websites and web applications using modern
            FrontEnd technologies such as CSS 3, HTML 5, ES 6, React. I am a
            passionate developer who loves building and managing, beautiful,
            easy-to-use, user friendly, scalable software products targeted at
            solving human problems across different sectors and fields of life
            and at the same learning.
        </div>
      </div>
      <div className='skills'>
        <div className='skills-container'>
        <div className='about-image'>
          <img src={aboutImage} alt='' />
        </div>
          <div style={{ width: '100%' }}>
            {skillSet.map((skill, i) => {
              return (
                <div key={i}>
                  <div className='skillData'>
                    <div className='skillName'>
                      <p>{skill.name}</p>
                    </div>
                    <div>
                      <p>{skill.percentage}</p>
                    </div>
                    <div
                      className='skillBar'
                      style={{ width: skill.bar }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
