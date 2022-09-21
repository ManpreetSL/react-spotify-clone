import { useEffect, useState } from 'react';
import './App.css';
import LogIn from './views/LogIn/LogIn';
import { getTokenFromURL } from './views/LogIn/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './views/Home/Player';
import { useDataLayerValue } from './context/DataLayer';

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  const spotify = new SpotifyWebApi();

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = '';

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user
        });
      });

      spotify.getUserPlaylists()
        .then(playlists => {
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists
          });
        });
    }
  }, []);
  
  return (
    <div className="App">
      <h1>Vaheguru Jee Kaa Khalsa; Vaheguru Jee Kee Fateh!</h1>

      {
        // If not logged in, show the log in page
        token ?
          <Player /> :
          <LogIn />
      }
    </div>
  );
}

export default App;
