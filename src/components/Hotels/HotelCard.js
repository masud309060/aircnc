import React from 'react';
import { Link } from 'react-router-dom';
import './HotelCard.css';

const HotelCard = ({hotelData}) => {
  return (
    <div className="hotel_card">
      {
        hotelData.map(item => 
          <Link to="/apartment">
            <div className="hotel_card_item">
              <img src={item.image} alt=""/>
              <div className="hotel_card_item_info">
                <h5>{item.title}</h5>
                <span>{`${item.guest} guests ${item.bedroom} bedrooms ${item.bed} beds ${item.bath} baths`}</span>
                <span style={{margin:"0.5rem 0"}}>{item.kitchen}</span>
                <span>{item.feature}</span>
                <div className="hotel_card_item_footer">
                  <span>
                    <i style={{color:"#16a085", marginRight:"2px"}} class="fas fa-star"></i>
                    {item.avgRating} ({item.totalRating})
                  </span>
                  <span>
                    <strong>${item.pricePerNight}</strong> 
                    <span>/Night</span>
                    <br/>
                    <span>$167 total</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
          )
      }
    </div>
  );
};

export default HotelCard;