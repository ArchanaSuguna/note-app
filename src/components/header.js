import React from 'react';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import "./header.css"

export default function header() {
  return (
    <nav className='header'>
        <SpeakerNotesIcon style={{margin: 10}} />
        <h2 className='header-desc'>TodoList</h2>   
    </nav>
  ) 
}

