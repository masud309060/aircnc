import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './Success.css';

const Success = ({process}) => {
  const history = useHistory()
  useEffect(() => {
    setTimeout(() => {
      history.push('/')
    },5000)
  }, [process])
  return (
    <div className="success">
      <h3>Your hotel is booking Successfully </h3>
      <h5>Thank you for stay with us </h5> 
      <img src="https://regionuts.com/img/icons/hand.gif" alt="appretiate gif"/>
    </div>
  );
};

export default Success;