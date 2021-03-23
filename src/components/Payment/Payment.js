import React, { useState } from 'react';
import './Payment.css';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

const Payment = ({process, setProcess}) => {
  const [value, setValue] = useState('credit');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="payment">
      <h5>Payment Section </h5>
      <div className="payment_area">
        <div className="payment_credit_header">
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel value="credit" control={<Radio />} label="Credit" />
            </RadioGroup>
          </FormControl>
          <div className="payment_credit_header_img">
            <img src="http://pngimg.com/uploads/mastercard/mastercard_PNG23.png" alt="master cart"/>
            <img src="https://pngimg.com/uploads/visa/visa_PNG3.png" alt="visa cart"/>
            <img src="https://png.pngitem.com/pimgs/s/654-6543054_logo-american-express-icon-png-transparent-png.png" alt="american express cart"/>
          </div>
        </div>
        <p className="w-75 ml-4 text-secondary">Safe money transfer using your band account. Visa, Maestro, Discover, American Express. </p>
      </div>
      <div className="payment_area mt-5 mb-3">
        <div className="payment_credit_header">
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
            </RadioGroup>
          </FormControl>
          <div className="payment_credit_header_img">
            <img src="https://download.logo.wine/logo/PayPal/PayPal-Logo.wine.png" 
            alt="master cart" 
            style={{height:"60px"}}
            />
          </div>
        </div>
          <p className="w-75 ml-4 text-secondary">Safe money transfer using your band account. Visa, Maestro, Discover, American Express. </p>
      </div>
      <button 
      onClick={() => setProcess({...process, payment: true})}
      className="btn-gradiant d-block ml-auto rounded"
      >
        Continue to pay
      </button>
    </div>
  );
};

export default Payment;