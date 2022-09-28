import React from 'react';
import './Footer.css';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Slider, Stack } from '@mui/material';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

function Footer() {

  const handleVolumeChange = () => {

  };
  return (
    <div className='footer'>
      <div className="footer__left">
        <img
          className='footer__albumCover'
          src='https://upload.wikimedia.org/wikipedia/en/2/29/Pok%C3%A9mon_2BA_Master.jpg'
          alt='2 B A Master album cover'
        />
        <div className="footer_songInfo">
          <h4>Together Forever</h4>
          <h5>Pokemon</h5>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon className='footer__icon' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>
      <div className="footer__right">
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <PlaylistPlayIcon />
          <VolumeDown />
          <Slider aria-label="Volume" value={50} onChange={handleVolumeChange} />
          <VolumeUp />
        </Stack>
      </div>
    </div>
  );
}

export default Footer;