import React from 'react';
import { Col, Row } from 'react-bootstrap';
import data from '../../data.json'
import Map from '../Map/Map';
import HotelCard from './HotelCard';

const Hotels = () => {
  const homeData = data.homes
  return (
    <div className="hotels">
      <Row>
        <Col sm={12} md={6}>
          <HotelCard homeData={homeData}/> 
        </Col>
        <Col sm={12} md={6}>
          <Map /> 
        </Col>
      </Row>
    </div>
  );
};

export default Hotels;