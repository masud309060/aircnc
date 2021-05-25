import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import HomeMain from '../HomeMain/HomeMain';
import HomeSidebar from '../HomeSidebar/HomeSidebar';

const Home = () => {
  return (
    <div className="home container">
      <Header /> 
      <h5 className="my-3">Where do you want to go </h5>
      <section className="row d-flex ">
        <div className="col-md-6 col-lg-4">
          <HomeSidebar /> 
        </div>
        <div className="col-md-6 col-lg-8">
          <HomeMain /> 
        </div>
      </section>
    </div>
  );
};

export default Home;