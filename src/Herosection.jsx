import React from 'react';
import "./Herosection.css";


function Herosection() {
  const handleHireClick = () => {
    window.location.href = "mailto:markmoses817@gmail.com?subject=Hiring Inquiry";
  };

  const handleLearnClick = () => {
    window.open("https://www.example.com", "_blank");
  };

  return (
    <div className='Home-page'>
       
          <h2>Hello there,</h2>
          <h1> I'm Mark <span>Moses</span></h1>
          <p>I'm a full-stack developer</p>
          <div className="cta-buttons">
            <button className="hire-button" onClick={handleHireClick}>Hire Me</button>
            <button className="learn-button" onClick={handleLearnClick}>Learn More</button>
          </div>
        </div>
  );
}

export default Herosection;
