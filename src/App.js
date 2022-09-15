import { useEffect, useState } from 'react';
import './App.css';
import LogIn from './views/LogIn/LogIn';
import { getTokenFromURL } from './views/LogIn/spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = '';

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);
  
  return (
    <div className="App">
      <h1>Vaheguru Jee Kaa Khalsa; Vaheguru Jee Kee Fateh!</h1>

      {
        // If not logged in, show the log in page
        token ? (
          <h1>Logged in to Spotify</h1>
        ) : (
          <LogIn />
        )
      }
    </div>
  );
}

export default App;
