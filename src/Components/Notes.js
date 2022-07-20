import React,{useContext} from 'react'
import notesContext from '../context/notes/notesContext';
import { Notesitem } from './Notesitem';
import { AddNotes } from "./AddNotes";



const Notes = (props) => {
          const context = useContext(notesContext);
  const {notes} = context
  return (
          <div className='container ' >
                  <AddNotes />

          <div className="row">
          <h1>Your Notes</h1>
          
          {notes.map((note)=>{
            return < Notesitem  key = {note._id} note = {note} /> ;
          })}
          </div>
          </div>
  )
}

export default Notes