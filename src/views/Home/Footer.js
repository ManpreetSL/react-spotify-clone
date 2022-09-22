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

function Footer() {

  const handleVolumeChange = () => {

  };
  return (
    <div className='footer'>
      <div className="footer__left">Album and songs</div>
      <div className="footer__center">
        <ShuffleIcon />
        <SkipPreviousIcon />
        <PlayCircleOutlineIcon />
        <SkipNextIcon />
        <RepeatIcon />
      </div>
      <div className="footer__right">
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" value={50} onChange={handleVolumeChange} />
          <VolumeUp />
        </Stack>
      </div>
    </div>
  );
}

export default Footer;