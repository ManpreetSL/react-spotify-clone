import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Body from './Body';
import './Banner.css';

function Banner() {
  return (
    <div className='banner'>
      <img
        src={ require('../../assets/BannerImage.png') }
        alt='' />
      <div className='banner__info'>
        <strong>Playlist</strong>
        <h2>Discover Weekly</h2>
        <p>Description</p>
      </div>
    </div>
  );
}

export default Banner;