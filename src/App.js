import React from 'react';
import './style.css';
import Calculator from './Components/Calculator';

export default function App() {
  return (
    <div>
      <h1 className="description">My Calculator.</h1>
      <div className="style">
       <div className="background-circle one"></div>
       <Calculator />
       <div className="background-circle two"></div>
      </div>
    </div>
  );
}
