import React from 'react';
import { Col, Row } from 'react-bootstrap';
import data from '../../data.json'
import SecondaryHeader from '../Header/SecondaryHeader';
import Map from '../Map/Map';
import HotelCard from './HotelCard';

const Hotels = () => {
  const hotelData = data.apartment.slice(0, 3)
  return (
    <div className="hotels container">
      <SecondaryHeader /> 
      <Row>
        <Col sm={12} md={6}>
          <HotelCard hotelData={hotelData}/> 
        </Col>
        <Col sm={12} md={6}>
          <Map /> 
        </Col>
      </Row>
    </div>
  );
};

export default Hotels;