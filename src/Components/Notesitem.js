import React,{useContext} from 'react'
import notesContext from "../context/notes/notesContext";


export const Notesitem = (props) => {
          const {note,updateNotes} = props 
          const context = useContext(notesContext);
  const { deletenotes } = context;
  return (
          <div className='col-md-3' >
          <div className="card  my-3">
          <div className="card-body my-3 ">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <i className="fa-solid fa-pen-to-square"onClick={()=>{updateNotes(note)}} ></i> Edit
            <i className="fa fa-trash-o mx-2 " aria-hidden="true" onClick={()=>{deletenotes(note._id)}}  ></i>Delete
          </div>
        </div>
        </div>
  )
}
