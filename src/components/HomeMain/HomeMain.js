import React, { useEffect } from "react";
import Experiences from "../Experiences/Experiences";
import "./HomeMain.css";
import HomesCard from "../HomesCard/HomesCard";
import { connect } from "react-redux";
import { fetchExperiences } from "../../redux/Actions/experiecesAction";
import { fetchHomes } from "../../redux/Actions/homesAction";
import { authStateChange } from "../../redux/Actions/authenticationActions";

const HomeMain = ({
  experiences,
  homes,
  fetchExperiences,
  fetchHomes,
  authStateChange,
}) => {
  useEffect(() => {
    fetchExperiences();
    fetchHomes();
    authStateChange();
  }, []);

  return (
    <div className="home_main">
      <h4>Experiences</h4>
      <Experiences experiences={experiences} />
      <h4>Homes</h4>
      <HomesCard homes={homes} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    experiences: state.experiences,
    homes: state.homes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchExperiences: () => dispatch(fetchExperiences(dispatch)),
    fetchHomes: () => dispatch(fetchHomes(dispatch)),
    authStateChange: () => dispatch(authStateChange()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeMain);
