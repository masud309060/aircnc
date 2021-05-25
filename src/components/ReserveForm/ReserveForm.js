import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './ReserveForm.css';

const ReserveForm = ({match, searchItem, show }) => {
  const history = useHistory()
  const [total, setTotal] = useState('')
  const [diffDays, setDiffDays] = useState(1)
  
  useEffect(() => {
    const date1 = new Date(searchItem?.arrival);
    const date2 = new Date(searchItem?.departure);
    const diffTime = Math.abs(date2 - date1);
    const daysDiff = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    if(1 <= daysDiff) {
      setDiffDays(daysDiff)
    }
    let pricePerNight = match.pricePerNight;
    let totalPrice = pricePerNight && (pricePerNight * daysDiff) + 10 + 21;
    setTotal(totalPrice)
  }, [])

  return (
    <div className="reserve_form mb-3">
      <div className="reserve_form_reviews">  
        {
          show ? 
          <>
          <h5>${match?.pricePerNight}/Night </h5>
          <span>
            <i class="fas fa-star" style={{color: "#079992", marginRight:".25rem"}}></i>  
            {match?.avgRating} ({match?.totalRating} reviews) 
          </span>
          </> : 
          <div className="reverse_form_card">
            <div>
              <h5>{match.title}</h5>
              <span>
                <i class="fas fa-star" style={{color: "#079992", marginRight:".25rem"}}></i>  
                {match?.avgRating} ({match?.totalRating} reviews) 
              </span>
            </div>
            <img src={match.image} alt={match.title} />
          </div>
        }
        </div>
        <div className="reserve_form_dates">
          <small>Dates</small>
          <div>
            <span>{searchItem?.arrival} </span>
            <i class="fas fa-arrow-right"></i>
            <span>{searchItem?.departure}</span>
          </div>
        </div>
        <div className="reserve_form_dates">
          <small>Guests</small>
          <div>
            <span>{searchItem?.guest} guests </span>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <div className="reserveForm_total_price">
          <div>
            <span> {match?.pricePerNight} x {diffDays} night </span>
            <span> {match?.pricePerNight*diffDays} </span>
          </div>
          <div>
            <span>Cleaning fee</span>
            <span>$10</span>
          </div>
          <div>
            <span>Service fee</span>
            <span>$21</span>
          </div>
          <div>
            <strong>Total</strong>
            <strong>${total}</strong>
          </div>
        </div>
        {
          show ? 
            <>
            <button 
            className="btn-gradiant w-100 rounded"
            onClick={() => history.push("/order-process")}
            >
              Reserve
            </button>
            <div className="text-center text-secondary">
              <small>You won't be changed yet</small>
            </div>
            </> : "" 
          
        }
    </div>
  );
};

export default ReserveForm;