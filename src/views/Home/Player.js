import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Body from './Body';
import './Player.css';

function Player() {
  return (
    <div className="player">
      <div className="player__container">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;