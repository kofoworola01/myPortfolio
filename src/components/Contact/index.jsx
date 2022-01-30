import React from "react";
import "./contact.css";

// import ContactImage from '../../images/contact-me.jpg'
import ContactImage from "../../images/contact-me-2.jpg";

const Contact = () => {
  return (
    <div className='ContactWrapper'>
      <div className='textWrapper'>
        <h2>Contact</h2>
      </div>      
      <div className='Wrapper'>
      <img src={ContactImage} alt='' />
      <div className='contact-container'>
        <p style={{margin: '30px 0'}}>Do you have a question?, Tell me about your available job opportunities or just say hi </p>
        <form action='' className='contact-form'>
          <input type='text' placeholder='Name:' className='Input' />
          <input type='mail' placeholder='Email:' className='Input' />
          <textarea
            name=''
            id=''
            cols='0'
            rows='10'
            placeholder='Your Message:'
            className='Input'
          ></textarea>
        </form>
      </div>
    </div>
    <button type='button' value='Send' className='contactBtn'>
        Send
    </button>
    </div>
);
};

export default Contact;
