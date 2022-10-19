import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./styles.css";
const CreateNote = (props) => {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

const handleChange = (e) => {

  const { name, value } = e.target;
   setNote(prevNote => { 
    return {  
      ...prevNote, [name]: value
    }
   })
}

const addNote = (e) => {
  e.preventDefault();
  props.onAdd(note);
  setNote({
    title: "",
    content: ""
  })
}


  return (
    <form className='create-note'>
    <input type="textarea" 
    placeholder='Title'
    name="title"
    value={note.title}
    onChange={handleChange}
  /> 
  <textarea name="content" placeholder='Enter Note...' value={note.content} onChange={handleChange}/>
  <button>
  <AddCircleIcon onClick={addNote}/>
  </button>
  </form>
  )
}

export default CreateNote;