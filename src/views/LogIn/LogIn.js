import React from 'react';
import './LogIn.css';
import { logInUrl } from './spotify';

function LogIn() {
  return (
    <>
        <div className='LogIn'>
          <img src={ require('../../assets/SpotifyLogo.png') } alt='Spotify logo' />
          <a href={ logInUrl }><button>Log in with Spotify</button></a>
        </div>
    </>
  )
}

export default LogIn;