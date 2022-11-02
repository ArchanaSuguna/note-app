import './App.css';
import Header from "./components/header";
import CreateNote from "./components/createNote";
import Note from "./components/note"
import { useState } from 'react';

//App

function App() {
  const [notes, setNotes] = useState([]);

  const changeNote = (note) => {
      setNotes((prevNotes) => [...prevNotes, note])

  }

  const deleteNote = (note) => {
     const remainingNotes = notes.filter((noteData) => noteData.title !== note.title);
     setNotes(remainingNotes);
  }

  console.log("The note is", notes);

  return (
    <>
      <Header/>
      <CreateNote onAdd={changeNote}/>
      <div className="note-area">
      {notes.length >= 1 && 
      notes.map((note, index) => {
       return <Note key={index} title={note.title} content={note.content} deleteNote={() => deleteNote(note)}/> 
      })   
}
</div>
</>
  )
}

export default App;
