import React, { useEffect } from 'react';
import './Hotels.css';
import { Col, Row } from 'react-bootstrap';
import SecondaryHeader from '../Header/SecondaryHeader';
import Map from '../Map/Map';
import HotelCard from './HotelCard';
import { connect } from 'react-redux';
import { fetchHotels } from '../../redux/Actions/hotelsAction';
import Moment from 'react-moment';

const Hotels = ({hotels, fetchHotels}) => {  
  useEffect(() => {
    fetchHotels();
  }, []) 

  return (
    <div className="hotels container">
      <SecondaryHeader /> 
      <Row>
        <Col sm={12} md={6}>
          <div className="hotels_header">
            <small> 252 stays {" "}
              <Moment format="MMM DD">{hotels.searchItem.arrival}</Moment>
              -
              <Moment format="DD">{hotels.searchItem.departure}</Moment> 
              {" "} 
              ( {hotels.searchItem.guest} guests ) 
            </small>
            <h5>Stay in {hotels.searchItem.location}</h5> 
            <div className="hotels_feature_btn_block">
              <button>Cancellation flexiblity</button>
              <button>Type of place</button>
              <button>Price</button>
              <button>Instant Book</button>
              <button>More Filters</button>
            </div>
          </div>
          { 
          hotels.loading ? <img 
          src="https://i.pinimg.com/originals/b8/c8/d8/b8c8d8b7f26bfd7e065f6fc82a4cc13e.gif" 
          alt="" height="200" /> :
          <HotelCard hotelData={hotels.hotels} /> 
          }
        </Col>
        <Col sm={12} md={6}>
          <Map /> 
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    hotels: state.hotels
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchHotels: () => dispatch(fetchHotels())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotels);