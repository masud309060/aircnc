import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import SecondaryHeader from '../Header/SecondaryHeader';
import Payment from '../Payment/Payment';
import ReserveForm from '../ReserveForm/ReserveForm';
import ReviewHouse from '../ReviewHouse/ReviewHouse';
import Success from '../Success/Success';
import TabBar from '../TabBar/TabBar';
import WhoComing from '../WhoComing/WhoComing';
import './OrderProcess.css';

const OrderProcess = ({ hotels }) => {
  console.log(hotels)
  const [process, setProcess] = useState({
    reviewHouse: false,
    whoComing: false,
    payment: false
  })


  return (
    <div>
      <Container>
      <SecondaryHeader /> 
      <TabBar process={process} setProcess={setProcess}/> 
        <Row>
          <Col md={7}>
            {
              process.reviewHouse && process.whoComing && process.payment ? 
              <Success process={process} setProcess={setProcess} /> : 
              process.reviewHouse && process.whoComing ? 
              <Payment process={process} setProcess={setProcess} /> :
              process.reviewHouse ? 
              <WhoComing process={process} setProcess={setProcess} /> :
              <ReviewHouse process={process} setProcess={setProcess} searchItem={hotels.searchItem} /> 
            }
          </Col>
          <Col md={5}>
            <ReserveForm match={hotels.selectedHotel} searchItem={hotels.searchItem}/> 
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    hotels: state.hotels,
  }
}

export default connect(mapStateToProps)(OrderProcess);