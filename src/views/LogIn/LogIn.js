import React from 'react';
import './LogIn.css';

function LogIn() {
  return (
    <>
        <div className='LogIn'>
          <img src={ require('../../assets/SpotifyLogo.png') } alt='Spotify logo' />
          <button>Log in with Spotify</button>
        </div>
    </>
  )
}

export default LogIn;