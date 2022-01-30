import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";


import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='social-icons'>
          <div className='footer-social'>
            <a href='https://twitter.com/Kofo_Omoade' className='footer-icon'>
              <FaTwitter className='footerIcon' />
            </a>
          </div>
          <div className='footer-social'>
            <a href='https://github.com/kofoworola01' className='footer-icon'>
              <FaGithub className='footerIcon'/>
            </a>
          </div>
          <div className='footer-social'>
            <a href='https://www.linkedin.com/in/kofoworola-adenekan-735b771bb/' className='footer-icon'>
              <FaLinkedin />
            </a>
          </div>
          <div className='footer-social'>
            <a href='https://web.facebook.com/simbiatkofoworola.adenekan' className='footer-icon'>
              <FaFacebookF />
            </a>
          </div>
        </div>

        <p> Kofoworola &#169; 2022</p>
      </footer>
    </div>
  );
};

export default Footer;
