import React, { useContext } from "react";
import { useState } from "react";
import notesContext from "../context/notes/notesContext";

export const AddNotes = () => {
  const context = useContext(notesContext);
  const { addnotes } = context;
  const [note, setnote] = useState({ title: " ", description: " ", tag: "default " });
  const addclick = (e) => {
          e.preventDefault();
    addnotes(note.title, note.description, note.tag);
  };
  const handlechange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Add Notes</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="Title"
            name="title"
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
            id="description "
            name="description"
            onChange={handlechange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={handlechange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={addclick}>
          AddNotes 
        </button>
      </form>
    </div>
  );
};
