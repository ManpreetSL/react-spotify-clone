import React from 'react';
import './Body.css';
import Header from './Header';

function Body() {
  return (
    <div className='body'>
      <Header />
      <h1>Logged in to Spotify. Playing now.</h1>
    </div>
  );
}

export default Body;