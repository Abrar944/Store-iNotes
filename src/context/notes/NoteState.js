import React from "react";
import NoteContext from "./notesContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http:/localhost:5000";
  const notesinitial = [{}];

  //Add Notes Function
  const addnotes = async (title, description, tag) => {
    //  API Calls
    const response = await fetch(`${host}/api/note/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMDJiZWRhMzdjZjEwYzViYzU3MmYwIn0sImlhdCI6MTY1Njc2MTM2NX0.CdNI0ImLmq3NCVwf-0giz4tcjivSAXd5NfAnc3Vgkso",
      },

      body: JSON.stringify({title,description,tag}),
    });
    const json = response.json();
    console.log( ' hello json' + json);

    //Add Notes Function
    const note = {
      _id: "62c02cdba37cf2110c25bc5732fa",
      user: "62c02beda37cf10c5bc572f0",
      title: title,
      description: description,
      tag: tag,
      date: "2022-07-02T11:32:43.578Z",
      __v: 0,
    };
    setNote(notes.concat(note));
  };
  const getnotes =  async ()=>{
          const response = await fetch(`${host}/api/note/update/${id}`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "auth-token":
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMDJiZWRhMzdjZjEwYzViYzU3MmYwIn0sImlhdCI6MTY1Njc2MTM2NX0.CdNI0ImLmq3NCVwf-0giz4tcjivSAXd5NfAnc3Vgkso",
                    },
              
                    body: JSON.stringify({title,description,tag} ),
                  });

  }
  //Delete Notes Function
  const deletenotes = (id) => {
    console.log("Notes get Delete With Using id" + id);
    const newnotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNote(newnotes);
  };
  
  //Edit Notes Function
  const editnotes = async (id, title, description, tag) => {
    //  API Calls
    const response = await fetch(`${host}/api/note/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMDJiZWRhMzdjZjEwYzViYzU3MmYwIn0sImlhdCI6MTY1Njc2MTM2NX0.CdNI0ImLmq3NCVwf-0giz4tcjivSAXd5NfAnc3Vgkso",
      },

      body: JSON.stringify({title,description,tag} ),
    });
    const json = response.json();
    console.log(json);

    //funcation editing Notes
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element.id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  const [notes, setNote] = useState(notesinitial);
  return (
    <NoteContext.Provider value={{ notes, addnotes, deletenotes, editnotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
