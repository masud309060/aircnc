import React from 'react';
import './TabBar.css';

const TabBar = ({process}) => {
  return (
    <div className="tab_bar">
      <div className="active">
        <h5>1. Reviews house rules </h5>
        <i class="fas fa-chevron-right"></i>
      </div>
      <div className={process.reviewHouse ? "active": ""}>
        <h5>2. Who's coming? </h5>
        <i class="fas fa-chevron-right"></i>
      </div>
      <div className={process.whoComing ? "active": ""}>
        <h5>3. Comfirm and Pay</h5>
      </div>
    </div>
  );
};

export default TabBar;