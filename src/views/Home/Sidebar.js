import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../../context/DataLayer';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <img src={ require('../../assets/SpotifyLogoBlack.png') } alt='Spotify logo' className='sidebar__logo'/>
      <SidebarOption title='Home' Icon={ HomeIcon } />
      <SidebarOption title='Search' Icon={ SearchIcon } />
      <SidebarOption title='Your Library' Icon={ LibraryMusicIcon } />

      <strong className="sidebar__title">Playlists</strong>
      <hr />
      {
        playlists?.items?.map(playlist => (
          <SidebarOption title={ playlist.name } key={ playlist.id } />
        ))
      }
    </div>
  );
}

export default Sidebar;