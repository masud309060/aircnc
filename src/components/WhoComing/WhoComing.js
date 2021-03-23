import React, { useState } from 'react';
import './WhoComing.css';

const WhoComing = ({process, setProcess}) => {
  const [message, setMessage] = useState("")
  /* const handleSubmit = (e) => {
    e.preventDefault()
  } */
  return (
    <div className="who_coming_page"> 
      <h5>Traveling for work? </h5>
      <div className="who_coming_page_info">
        <div>
          <p>Say hello to your host</p>
          <p>let Rowdra know a litttle about yourself and why you're coming. </p>
        </div>
        <div>
          <img 
          className="user_photo"
          src="/images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg" 
          alt="logo"/>
          <p>user name</p>
        </div>
      </div>
      <form>
        <textarea 
        onChange={(e)=> setMessage(e.target.value)}
        defaultValue={message}
        className="w-100 p-2"
        name="message" 
        id="message" 
        rows="8"
        placeholder="hello Rawdro! Can't wait to spend 4 night is your home."
        >
        </textarea>
        <button 
        onClick={()=> setProcess({...process, whoComing: true})}
        className="btn-gradiant rounded mt-3"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default WhoComing;