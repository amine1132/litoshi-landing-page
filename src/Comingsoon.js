import React from 'react';
import './Comingsoon.css';


function Comingsoon() {
  return (
    <div className="max">
      <div className="colone">
        <div className="idk">
          <header>
            <div className="top">
              <div className="style">    
                <p>I hope everything is fine today...</p>
                <h1>COMING SOON</h1>
              </div>
              <div className="input">
                <div className="notif">
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="gauche">
          <div className="chain">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="menu">
            <button className="dashboard"><i className="fa-regular fa-square"></i>Dashboard</button>
            <button className="watchlist"><i className="fa-regular fa-square"></i>Dashboard</button>
            <button className="alerts"><i className="fa-regular fa-square"></i>Dashboard</button>
            <button className="multicharts"><i className="fa-regular fa-square"></i>Dashboard</button>
            <div className="navigation">
              <button className="red">BRC-20</button>
              <button className="bleu">LTC-20</button>
              <button className="jaune">DRC-20</button>
            </div>
          </div>
          <div className="menufooter">
            {/* Ne pas oublier d'importer FontAwesome pour les icônes et de les mettre juste à côté des boutons */}
            <button><i className="fa-solid fa-gear"></i>Setting</button>
            <button><i className="fa-regular fa-user"></i>Profile</button>
            <button><i className="fa-solid fa-arrow-right-from-bracket"></i>Log Out</button>
          </div>
        </div>
        <div className="ellipse">
        </div>
      </div>
    </div>
  );
}

export default Comingsoon;
