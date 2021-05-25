import { Collapse } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { hotelsSearchKey } from '../../redux/Actions/hotelsAction';
import './HomeSidebar.css';

const HomeSidebar = ({searchItem, hotelsSearchKey }) => {
  const history = useHistory()
  const [expanded, setExpanded] = useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [adult, setAdult] = useState(1)
  const [child, setChild] = useState(0)
  const [search, setSearch] = useState({
    location: '',
    arrival: '',
    departure: '',
    fulfill: false,
  })

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(adult || child ) {
      setSearch({
        ...search,
        adult: adult,
        child: child,
        guest: adult + child,
        fulfill: true
      })
      hotelsSearchKey(search)
      history.push('/hotel')
    } 
  }
  
  return (
    <div className="home_sidebar">
      <form onSubmit={handleSubmit}>
        <div className="input_area input_location">
          <strong>LOCATION</strong>
          <input 
          name="location" 
          onChange={handleChange} 
          type="text" 
          placeholder="Add city, Landmark, or address" 
          required
          />
        </div>
        <div className="input_arrival_departure">
          <div>
            <label>Arrival</label>
            <input 
            name="arrival" 
            onChange={handleChange} 
            type="date" 
            required
            />
          </div>
          <div>
            <label>Departure</label>
            <input 
            name="departure" 
            onChange={handleChange} 
            type="date" 
            required
            />
          </div>
        </div>
        <div className="input_area">
          <label>Guests</label>
          <div className="toggle_guests">
            <strong>{adult} ADULTS, {child} CHILD</strong>
            <span onClick={handleExpandClick} aria-expanded={expanded}>
              <i className={`${!expanded ? "fas fa-chevron-down" : "fas fa-chevron-up"}`}></i>
            </span>
          </div>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          
            <div className="guests_select" id="collapse-info">
              <div>
                <strong>ADULTS</strong> 
                <strong> 
                  <button type="button" disabled={adult < 1 ? true : false } onClick={() => setAdult(adult - 1)}> &minus; </button>
                  <span> {adult} </span>
                  <button type="button" onClick={() => setAdult(adult + 1)}> + </button> 
                </strong>
              </div>
              <div>
              <div>
                <strong>CHILD</strong> <br/>
                <em style={{color: "#aaa"}}>Age 2 - 12 </em>
              </div>
              <strong> 
                <button type="button" disabled={child < 1 ? true : false } onClick={() => setChild(child - 1)}> &minus; </button>
                <span> {child} </span>
                <button type="button" onClick={() => setChild(child + 1)}> + </button> 
              </strong>
              </div>
              <div>
                <div>
                  <strong>BABIES</strong> <br/>
                  <em style={{color: "#aaa"}}>Younger Than 2</em>
                </div>
                <strong> 
                  <button> &minus; </button>
                  <span> 0 </span>
                  <button> + </button> 
                </strong>
              </div>
            </div>
            <button 
            type="button" 
            onClick={handleExpandClick} 
            className="btn-outline d-block mt-1 ml-auto"
            > 
              APPLY 
            </button>
          </Collapse>
        </div>
        <button 
        type='submit'
        className="btn-gradiant" 
        style={{padding:"0.75rem", borderRadius: "0.5rem"}}>
          <i className="fa fa-search"></i> {" "} Search 
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchItem: state.hotels.searchItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hotelsSearchKey: (search) => dispatch(hotelsSearchKey(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSidebar);