import React, { useContext, useEffect, useRef,useState } from "react";
import notesContext from "../context/notes/notesContext";
import { Notesitem } from "./Notesitem";
import { AddNotes } from "./AddNotes";

const Notes = () => {
  useEffect(() => {
    getnotes();
  });
  const ref = useRef(null);
  const refClose = useRef(null);
  const context = useContext(notesContext);
  const { notes, getnotes,editnotes } = context;
  const [note, setnote] = useState({id: " ", etitle: " ", edescription: " ", etag: " "});
  
  const updateNotes = (currentNote) => {
    ref.current.click();
    setnote({id :currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  };

  const addclick = (e) => {
    console.log("Updating the Notes" , note);
    refClose.current.click();
    editnotes(note.id,note.etitle,note.edescription,note.etag)
    e.preventDefault();
};
//Function For Making the Changes

const handlechange = (e) => {
setnote({ ...note, [e.target.name]: e.target.value });
};
  return (
    <div className="container ">
      <AddNotes />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Notes
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="etitle"
            name="etitle"
            value = {note.etitle}
            aria-describedby="emailHelp"
            onChange={handlechange}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="edescription "
            value = {note.edescription}
            name="edescription"
            onChange={handlechange}
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="etag "
            value = {note.etag}
            name="etag"
            onChange={handlechange}

          />
        </div>
      </form>
            
            
            </div>
            <div className="modal-footer">
              <button ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={addclick} type="button" className="btn btn-primary">
                Update Notes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <h1>Your Notes</h1>

        {notes.map((note) => {
          return (
            <Notesitem key={note._id} updateNotes={updateNotes} note={note} />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
