import React,{useContext} from 'react'
import notesContext from '../context/notes/notesContext';
import { Notesitem } from './Notesitem';


const Notes = (props) => {
          const context = useContext(notesContext);
  const {notes , setNotes} = context
  return (
          <div className='container' >
          <div className="row">
          <h1>Your Notes</h1>
          
          {notes.map((note)=>{
            return <Notesitem note = {note} /> ;
          })}
          </div>
          </div>
  )
}

export default Notes