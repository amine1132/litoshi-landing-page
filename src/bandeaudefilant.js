import React, { useState, useEffect } from 'react';
import Data from './data.json';
import './bandeaudefilant.css'
import Slider from "react-slick";
import axios from 'axios';

const DataDisplay = () => {
  const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://brc-20.io/api_prices');
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  
    // Tri et extraction du top 10 des objets avec les prix les plus élevés
    const sortedData = data.sort((a, b) => b.prix - a.prix);
    const top10Data = sortedData.slice(0, 10);
    console.log(top10Data);
  
  return (
    <div className='defilante'>
      <ul className='slide'>
        {top10Data.map((item, index) => (
          <li key={index}>
            <span className='titre'>{item.token}</span><span>${parseFloat(item.price).toFixed(2)}</span>${Math.floor(item.marketCap).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </li>
        ))}
        {top10Data.map((item, index) => (
          <li key={index}>
            <span className='titre'>{item.token}</span><span>${parseFloat(item.price).toFixed(2)}</span>${Math.floor(item.marketCap).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;