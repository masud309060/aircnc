import React from 'react';
import Moment from 'react-moment';
import './ReviewHouse.css';

const ReviewHouse = ({process, setProcess, searchItem}) => {
  const noteData = [
    {
      _id: 101,
      img: "/images/ic_child_friendly_48px.png",
      title: "Suitable for childrean and infants"
    },
    {
      _id: 102,
      img: "/images/ic_pets_48px.png",
      title: "Pets allowed"
    },
    {
      _id: 103,
      img: "/images/forbidden.png",
      title: "No parties or events"
    },
    {
      _id: 104,
      img: "/images/ic_smoking_rooms_48px.png",
      title: "Smoking allowed"
    },
  ]

  return (
    <div className="review_house">
      <h3>Review house rules </h3>
      <h5>3 nights in Dhaka</h5>
      <div className="review_house_duration">
        <div className="review_house_duration_card">
          <div className="card_date">
            <Moment format="MMM">{searchItem.arrival}</Moment>
            <Moment format="DD">{searchItem.arrival}</Moment>
          </div>
          <div>
            <span>
              <Moment format="dddd">{searchItem.arrival}</Moment>
               {" "}check-in
            </span>
            <span>After 12:00PM</span>
          </div>
        </div>
        <div className="review_house_duration_card">
          <div className="card_date">
            <Moment format="MMM">{searchItem.departure}</Moment>
            <Moment format="DD">{searchItem.departure}</Moment>
          </div>
          <div>
            <span>
              <Moment format="dddd">{searchItem.departure}</Moment>
              {" "} check-in
            </span>
            <span>After 12:00PM</span>
          </div>
        </div>
      </div>
      <p className="mb-4">Self check-in with building staff</p>
      <p style={{borderBottom:"1px solid gray"}}></p>
      <h5 className="mb-0">Things to keep in mind</h5>
      <div className="review_house_note">
        {
          noteData.map(item => 
            <div key={item._id}>
              <img src={item.img} alt={item.title}/>
              <p>{item.title}</p>
            </div>
            )
        }
      </div>
      <div className="review_house_read_more">
        <strong>Read More</strong>
        <i class="fas fa-chevron-down"></i>
      </div>
      <button 
      className="btn-gradiant rounded my-5"
      onClick={() => setProcess({...process, reviewHouse: true})}
      >
        Agree and continue
      </button>
    </div>
  );
};

export default ReviewHouse;