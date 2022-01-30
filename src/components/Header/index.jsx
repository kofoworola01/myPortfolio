import React from "react";
import KofoPic from '../../images/kofi.jpg'
import "./header.css";

const Header = () => {
  return (
    <div className='mainWrapper'>
      <div className='subWrapper'>
        <div className='btnWrapper'>Get In Touch</div>
        <img src={KofoPic} alt='' className='pic' />
        <h2 className='title'> Hello, I am KOFOWOROLA </h2>
        <div className='lineWrapper'>
          <div class='line'></div>
          <div className='star'>❃</div>
          <div className='line'></div>
        </div>
        <h3>Self taught Front-End Developer. School taught Computer Science</h3>
      </div>
    </div>
  );
};
// I am a junior frontend engineer who loves building and managing scalable software products targeted at solving human problems across different sectors and fields of life and at the same learning. My current skills are Html, Css, Javascript and React.
export default Header;
