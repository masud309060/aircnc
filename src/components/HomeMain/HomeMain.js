import React from 'react';
import Experiences from '../Experiences/Experiences';
import './HomeMain.css';
import data from '../../data.json';
import HomesCard from '../HomesCard/HomesCard';

const HomeMain = () => {
  const experiences = data.experiences;
  const homes = data.homes;
  
  return (
    <div className="home_main">
      <h4>Experiences</h4>
      <Experiences experiences={experiences} /> 
      <h4>Homes</h4>
      <HomesCard homes={homes} /> 
    </div>
  );
};

export default HomeMain;