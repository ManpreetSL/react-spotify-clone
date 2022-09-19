import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';


function Sidebar() {
  return (
    <div className='sidebar'>
      <img src={ require('../../assets/SpotifyLogoBlack.png') } alt='Spotify logo' className='sidebar__logo'/>
      <SidebarOption title='Home' />
      <SidebarOption title='Search' />
      <SidebarOption title='Your Library' />
    </div>
  );
}

export default Sidebar;