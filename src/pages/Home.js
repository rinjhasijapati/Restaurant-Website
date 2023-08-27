import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/dumplings.png';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>QuickBite Bistro</h1>
        <p>SAVORING FLAVORS, CREATING MEMORIES</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

