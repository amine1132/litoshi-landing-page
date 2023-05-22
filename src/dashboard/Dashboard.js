import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './Dashboard.css';
import litoshi from './litoshi.svg'
import cercle from './Cercle.svg'
import { json } from 'react-router-dom';

const address = 'bc1p6ed8wca5sjmzvsf92uc2ak2egphj9zw59dghcup2ve95slpvcxlqynsk7j';

function Dashboard() {
  const [data, setData] = useState([]);
  const [overall_balance, setOverallBalance] = useState(0);
  const [available_balance, setAvailableBalance] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://brc20api.bestinslot.xyz/v1/get_brc20_balance/'+address); 
      const jsonData = response.data;
      setData(jsonData);
      calculateSums(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  const calculateSums = (data) => {
    let overallSum = 0;
    let availableSum = 0;

    data.forEach((item) => {
      overallSum += parseInt(item.overall_balance, 10);
      availableSum += parseInt(item.available_balance, 10);
    });

    setOverallBalance(Number(overallSum));
    setAvailableBalance(Number(availableSum));
  };


  return (
    <>
    <div className="max">
      <div className="colone">
        <div className="idk">
        <header>
      <div className="top">
        <div className="style">
          <h1>Welcome Back <span>Jhon!</span></h1>
          <p>I hope everything is fine today...</p>
        </div>
        <div className="input">
          <div className="loupe">
          </div>
          <input type="text" placeholder="Search.." className="formulaire_1" />
          <div className="notif">
          </div>
        </div>
      </div>
    </header>
          <div className="groupe1">
            <div className="box1">
              <div className='groupv1'>
                <div className='group1'>
                <p>My Wallet</p>
                <h1>Total: ${overall_balance.toLocaleString()}</h1>
                </div>
                <div className='group2'>
                  <p>Available</p>
                  <p>${available_balance.toLocaleString()}</p>
                  {/*données du montant du produit*/}
                </div>
                <div className='group3'>
                  <p>Transferable</p>
                  <p>${(overall_balance-available_balance).toLocaleString()}</p>
                  {/*données du montant du produit*/}
                </div>
              </div>
              <div>
                <img src={cercle} alt=""/>
              </div>
            </div>
            <div className="box2">
              <p>Average of your wallet</p>
              {/*données du montant du produit*/}
              {/*Graph qu'on va importer avec du chart.js*/}
            </div>
          </div>
          <div className="groupe2">
            <div className="box3">
              <div className='topv1'>
              <p>My Assets</p>
              <button type="button">Token</button>
              <button type="button">NFT</button>
              </div>
              <nav className="topline">
                  <table>
                  <thead> 
                  <tr>
                    <th>Name</th>
                    <th>Positions</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>Volume 24h</th>
                    <th>Marketcap</th>
                    <th>Supply</th>
                  </tr>
                  </thead> 
                    {data.map(token => (
                      <TickComponent tick={token.tick} />
                    ))}
                </table>
              </nav>
            </div>
          </div>
        </div>
        <div className="gauche">
          <div className="chain">
            <img src={litoshi} alt="" />
          </div>
          <div className="menu">
              <div className='menu2'>
                <button>Dashboard</button>
                <button>My wallet</button>
                <button>Analyze</button>
                <button>Exchange</button>
                <button>Multicharts</button>
              </div>
              <div className='menuv1'>
                <button className='BRC'>BRC-20</button>
                <button className='LTC'>LTC-20</button>
                <button className='DRC'>DRC-20</button>
              </div>
            <div className="menufooter">
              <button>Setting</button>
              <button>Profile</button>
              <button>Log Out</button>
          </div>
          </div>
        </div>
        <div className="ellipse">
        </div>
      </div>
    </div>
  </>
  );
}

function TickComponent({ tick }) {
  const [tickData, setTickData] = useState(null);

  useEffect(() => {
    fetchTickData();
  }, []);

  const fetchTickData = async () => {
    try {
      const response = await axios.get(`https://brc20api.bestinslot.xyz/v1/get_brc20_ticker/${tick}`); // Remplacez l'URL par l'URL réelle de l'API pour récupérer les caractéristiques du tick
      const tickData = response.data.ticker[0];
      setTickData(tickData);
    } catch (error) {
      console.log(error);
    }
  };

  if (!tickData) {
    return <div>Loading tick data...</div>;
  }

  return (
    <tr>
      <td>{tickData.tick.toUpperCase()}</td>
      <td>Positions</td>
      <td>Price</td>
      <td>Change 24h</td>
      <td>Volume 24h</td>
      <td>Marketcap</td>
      <td>{Number(tickData.max_supply).toLocaleString()}</td>
    </tr>
  );
}

export default Dashboard;
