import React, { useContext } from "react";
import { useState } from "react";
import notesContext from "../context/notes/notesContext";

export const AddNotes = () => {
  const context = useContext(notesContext);
  const { addnotes } = context;
  const [note, setnote] = useState({ title: " ", description: " ", tag: " " });

  //Function For Adding the Notes
  const addclick = (e) => {
    e.preventDefault();
    addnotes(note.title, note.description, note.tag);
    setnote({ title: " ", description: " ", tag: " " })
  };
  //Function For Making the Changes
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
            id="title"
            name="title"
            value = {note.title}
            aria-describedby="emailHelp"
            required
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
            value = {note.description}
            onChange={handlechange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag "
            name="tag"
            value = {note.tag}
            onChange={handlechange}
            required
          />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5 } type="submit" className="btn btn-primary" onClick={addclick}>
          AddNotes
        </button>
      </form>
    </div>
  );
};
