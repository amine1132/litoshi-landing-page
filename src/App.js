
import './App.css';
import React from 'react';
import {TbShield} from 'react-icons/tb';
import {MdOutlineDashboardCustomize} from 'react-icons/md';
import{TbHandFinger} from 'react-icons/tb'
import {SiTwitter} from 'react-icons/si'
import {BsDiscord} from 'react-icons/bs'
import {SiMedium} from 'react-icons/si'
import Group427319728 from './img/Group427319728.svg';
import Vector16 from './img/Vector16.svg'
import vectormobile from './img/vectormobile.svg'
import mobile from './img/mobile.svg'
import Vector15 from './img/Vector 15.svg'
import Vector4 from './img/Vector4.svg'
import  v09 from './img/v09.svg'
import blanc from './img/blanc.svg'
import vert from './img/vert.svg'
import orange from './img/orange.svg'
import Group34054 from './img/Group34054.svg'
import Frame427319940 from './img/Frame427319940.svg'
import Frame427 from './img/Frame427.svg'
import './App.css';
import Group50 from './img/Group50.svg'
import Roadmap from './img/Roadmap.svg'
import Frame from './img/Frame.svg'
import Logo from './img/Logo.svg'
import InfiniteScrollBand from './InfiniteScrollBand'

function App() {
  return (
    <div className='max'>
      <div className='max2'>
        <div className='nav'>
          <img src={Logo} alt="" className='logo'/>
          <button type="button">Sign up</button>
        </div>
      <div className='placementorigin'>
      <div className="bloctext1">
        <p className='agree'>Aggregator</p>
        <p className= "taille">Manage yours assets</p>
        <span>in minutes</span>
        <p className='soustexte'>Litoshi aggregate all the data from the BRC20 and LTC20 market. Track, trade & transfer.</p>
        <button type="button">Get started</button>
      </div>
        <div className='marketcap2'>
          <img src={Group50} alt=""/>
      </div>
      </div>
      <div className='placement3'>
      <div className="bloctext2">
        <p className='market'>Market <span>Data</span></p>
        <div className='soustexte1'>
        <p className='soustexte'>For a complete management of your assets, it is essential to have the market data inherent to them at hand. 
        For this purpose Litoshi calls upon the pioneers of these markets to optimize the accuracy of the data.</p>
        </div>
      </div>
      <div className='placement4'>
      <div className="rectangle1">
          <div className="text1">
            <p>Litoshi</p>
            <p>$518.1</p>
          <div className="text2">
            <p className='grisop'>X</p>
            <p className='grisop2'>+8.32</p>
          </div>
          </div>
          <img src={vectormobile} alt="" className="graph" />
          <img src={blanc} alt="" className='blurblanc'/>
      </div>
      <div className='placement'>
      <div className="rectangle2">
          <div className="text1">
            <p>OSHI</p>
          <div className="text2">
            <p>OSHI</p>
          </div>
          </div>
        <img src={Vector15} alt="" className="vector2" />
        <img src={vert} alt="" className='blurvert'/>
        <div className="bloc2">
          <p>$123.9</p>
          <p>+2.32</p>
        </div>
      </div>
      </div>
      <div className='placement1'>
      <div className="rectangle3">
        <div className="text1">
          <p>VPMX</p>
          <p className='orange'>$4,112</p>
        <div className="text2">
          <p>VPMX</p>
          <p className='orange2'>-86.1</p>
        </div>
        </div>
        <img src={Vector4} alt="" className="ligne10" />
        <img src={orange} alt="" className='blurorange'/>
      </div>  
      </div>
      </div>
      </div>
      <div className="bloctext3">
        <div className="titre2">
          <p>Why Litoshi</p>
          <span>Management</span>
        </div>
        <div className='placementv1'>
        <div className="text3">
          <div className="iconehand"><TbHandFinger strokeWidth={0.5}/></div>
          <span>Ease of use</span>
          <p className='soustexte'>Litoshi has been designed with users in mind. From any devices, you can easily manage your crypto 
          and perform transactions effortlessly.</p>
        </div>
        <div className="text4">
          <div className="iconedash"><img src={Frame} alt=""/></div>
          <span>One app, unlimited opportunities</span>
          <p className='soustexte'>Track, trade, transfer, customize in one place. As long as the users ask us for new tools we will provide their needs.</p>
        </div>
        <div className="text5">
          <div className="iconeshield"><TbShield strokeWidth={0.5} /></div>
          <span>Open source</span>
          <p className='soustexte'>Transparency is the one the core foundation of our ecosystem. Being open source is inevitable for all of us building here.</p>
        </div>
        </div>
      </div>
      <div>
        <div className="text6">
          <div className='placementv2'>
          <p className='titre6'>We make it <span>Easy</span></p>
          <p className='soustextev1'>Our mission is to enable our users to navigate through this torrent of financial data more intuitively. We want to save your time.</p>
          </div>
          <img src={v09} alt="" className="madame" />
        <button className='button2'>Get started</button>
        </div>
      </div>
      <div className="bloctext4">
        <div className='titre4'>
          <p>Token mint <span>process?</span></p>
        </div>
        <div className='placementv3'>
        <div className="textv1">
          <div className="icone1">
            <p>01</p>
          </div>
          <p className='soustexte'>5 minutes before public team & partners will mint a maximum of 10%. After this 5 minutes public launch start.</p>
        </div>
        <div className="textv2">
          <div className="icone2">
            <p>02</p>
          </div>
          <p className='soustexte'>Public launch will be announced on Discord first, then on Twitter.</p>
        </div>
        <div className="textv3">
          <div className="icone3">
            <p>03</p>
          </div>
          <p className='soustexte'>Airdrop. Tokens minted by the partners & team will be used for airdrop to the community and investment for Litoshi.</p>
        </div>
        </div>
      </div>
      <p className="title">Roadmap</p>
      <div className="container">
        <img src={Roadmap} alt="" className='roadmap'/>
      </div>
    </div>

      <footer>
        <div className="footer">
          <div className="formulaire">
          <div className='ligne'>
          </div>
            <a href="https://twitter.com/Litoshimarket"><button><SiTwitter/></button></a>
            <a href="https://discord.gg/cJ6aGnPM"><button><BsDiscord/></button></a>
            <a href="https://medium.com/@litebitmarket"><button><SiMedium/></button></a>
            <div className='ligne'>
            </div>
          </div>
          <p>Made by Litoshi Team @Copyright 2023</p>
        </div>
      </footer>
    </div>
  );
}
export default App;


