import logo from './logo.svg';
import './Dashboard.css';
import React from 'react';
import litoshi from './litoshi.svg'
import cercle from './Cercle.svg'

function App() {
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
          <input type="text" placeholder="Search.." className="formulaire" />
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
                <h1>Total:$ 66,898</h1>
                </div>
                <div className='group2'>
                  <p>Available</p>
                  <p>$61,898</p>
                  {/*données du montant du produit*/}
                </div>
                <div className='group3'>
                  <p>Transferable</p>
                  <p>$5000</p>
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
                <div className='titreul'> 
                  <ul>
                    <li>Name</li>
                    <li>Positions</li>
                    <li>Price</li>
                    <li>24h</li>
                    <li>Volume 24h</li>
                    <li>Marketcap</li>
                    <li>Supply</li>
                </ul>
                </div>
                <ul className=''>
                  <li>ORDI</li>
                  <li>Positions</li>
                  <li>Price</li>
                  <li>24h</li>
                  <li>Volume 24h</li>
                  <li>Marketcap</li>
                  <li>Supply</li>
                </ul>
                <ul>
                  <li>PEPE</li>
                  <li>Positions</li>
                  <li>Price</li>
                  <li>24h</li>
                  <li>Volume 24h</li>
                  <li>Marketcap</li>
                  <li>Supply</li>
                </ul>   
                <ul>
                  <li>PIZA</li>
                  <li>Positions</li>
                  <li>Price</li>
                  <li>24h</li>
                  <li>Volume 24h</li>
                  <li>Marketcap</li>
                  <li>Supply</li>
                </ul>
                <ul>
                  <li>NALS</li>
                  <li>Positions</li>
                  <li>Price</li>
                  <li>24h</li>
                  <li>Volume 24h</li>
                  <li>Marketcap</li>
                  <li>Supply</li>
                </ul>               
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
          </div>
          <div className="menufooter">
            <button>Setting</button>
            <button>Profile</button>
            <button>Log Out</button>
          </div>
        </div>
        <div className="ellipse">
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
