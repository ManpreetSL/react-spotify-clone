import React from 'react';
import Banner from './Banner';
import Header from './Header';
import './Body.css';

function Body() {
  return (
    <div className='body'>
      <Header />
      <Banner />
      <h1>Logged in to Spotify. Playing now.</h1>
    </div>
  );
}

export default Body;