import React from 'react';
import AboutImage from '../assets/aboutfood.jpeg';
import "../styles/About.css";

function About() {
  return (
    <div className='about'>
        <div 
        className='aboutTop' 
        style={{backgroundImage: `url(${AboutImage})`}}
        ></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Welcome to QuickBites Bistro, where culinary excellence meets the rich tapestry of Asian 
                flavors. Our passion for Asian cuisine drives us to craft an experience that brings the 
                essence of dim sum, the aroma of pineapple fried rice, the succulence of roasted duck, 
                the warmth of curry with rice, the artistry of sushi, and the comfort of ramen together 
                under one roof. With each dish, we weave a story that celebrates tradition while 
                embracing innovation. At QuickBites Bistro, we invite you to embark on a gastronomic 
                journey that honors the heart and soul of Asian culinary heritage.</p>
        </div>
    </div>
  )
}

export default About