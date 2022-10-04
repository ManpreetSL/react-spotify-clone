import React from 'react';
import './Header.css';
import { useDataLayerValue } from '../../context/DataLayer';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';

function Header() {
    
  const [{ user, spotify }] = useDataLayerValue();

  return (
    <div className='header'>
        <div className='header__left'>
            <SearchIcon />
            <input
                placeholder='Search'
                type='text'
                name='search'
                id='search' />
        </div>
        <div className='header__right'>
            <Avatar
                src={ user?.images[0]?.url }
                alt={ user?.display_name } />
            <h4>{ user?.display_name }</h4>
        </div>
    </div>
  );
}

export default Header;