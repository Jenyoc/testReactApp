import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homePage">
      <h1>Welcome to DogsApp!</h1>
      <p className="homePageText">Hi! This application showing pictures of different dog breeds.</p>
      <p className="homePageText">
        Click <Link to="/breed-list">Breed list</Link> to select the breed you need from the list or use the <strong>search bar</strong>
        .</p>
    </div>
  )
};

export default Home;
