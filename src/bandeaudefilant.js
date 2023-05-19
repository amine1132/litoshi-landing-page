import React, { useState, useEffect } from 'react';
import Data from './data.json';
import './bandeaudefilant.css'
import Slider from "react-slick";

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(Data);
        console.log(Data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className='defilante'>
      <ul className='slide'>
        {data.map((item, index) => (
          <li key={index}>
            <span className='titre'>{item.token}</span><span>${parseFloat(item.price).toFixed(2)}</span>${Math.floor(item.marketCap).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </li>
        ))}
        {data.map((item, index) => (
          <li key={index}>
            <span className='titre'>{item.token}</span><span>${parseFloat(item.price).toFixed(2)}</span>${Math.floor(item.marketCap).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;