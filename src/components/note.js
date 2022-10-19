import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "./styles.css"

export default function note({title, content, deleteNote}) {

  return (
        <div className='note-content'> 
        <p>{title}</p>
        <div>{content}</div>
        <DeleteIcon onClick={deleteNote}/>
        </div>
    )
}
