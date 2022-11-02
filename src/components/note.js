import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "./styles.css"

export default function note({title, content, deleteNote}) {

  return (
    //ass
        <div className='note-content'> 
        <p className='title-style'>{title}</p>
        <div className='title-content'>{content}</div>
        <DeleteIcon className='icon' onClick={deleteNote}/>
        </div>
    )
}
