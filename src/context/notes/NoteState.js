import React from "react";
import NoteContext from "./notesContext";
import { useState } from "react";

const NoteState = (props)=>{
          
const notesinitial = [
          
                    {
                      "_id": "62c02cdba37cf10c5bc572fa",
                      "user": "62c02beda37cf10c5bc572f0",
                      "title": "SuperMan Notes",
                      "description": "Movies ka masla",
                      "tag": "#Marvel",
                      "date": "2022-07-02T11:32:43.578Z",
                      "__v": 0
                    },
                    {
                      "_id": "62c02cdca37cf10c5bc572fc",
                      "user": "62c02beda37cf10c5bc572f0",
                      "title": "SuperMan Notes",
                      "description": "Movies ka masla",
                      "tag": "#Marvel",
                      "date": "2022-07-02T11:32:44.999Z",
                      "__v": 0
                    },
                    {
                      "_id": "62c02cdca37cf10c5bc572fc",
                      "user": "62c02beda37cf10c5bc572f0",
                      "title": "SuperMan Notes",
                      "description": "Movies ka masla",
                      "tag": "#Marvel",
                      "date": "2022-07-02T11:32:44.999Z",
                      "__v": 0
                    },
                    {
                      "_id": "62c02cdca37cf10c5bc572fc",
                      "user": "62c02beda37cf10c5bc572f0",
                      "title": "SuperMan Notes",
                      "description": "Movies ka masla",
                      "tag": "#Marvel",
                      "date": "2022-07-02T11:32:44.999Z",
                      "__v": 0
                    },
                    {
                      "_id": "62c02cdca37cf10c5bc572fc",
                      "user": "62c02beda37cf10c5bc572f0",
                      "title": "SuperMan Notes",
                      "description": "Movies ka masla",
                      "tag": "#Marvel",
                      "date": "2022-07-02T11:32:44.999Z",
                      "__v": 0
                    },
                    {
                      "_id": "62c02cdca37cf10c5bc572fc",
                      "user": "62c02beda37cf10c5bc572f0",
                      "title": "SuperMan Notes",
                      "description": "Movies ka masla",
                      "tag": "#Marvel",
                      "date": "2022-07-02T11:32:44.999Z",
                      "__v": 0
                    },
                    {
                      "_id": "62c02cdca37cf10c5bc572fc",
                      "user": "62c02beda37cf10c5bc572f0",
                      "title": "SuperMan Notes",
                      "description": "Movies ka masla",
                      "tag": "#Marvel",
                      "date": "2022-07-02T11:32:44.999Z",
                      "__v": 0
                    },
                    {
                      "_id": "62c02cdca37cf10c5bc572fc",
                      "user": "62c02beda37cf10c5bc572f0",
                      "title": "SuperMan Notes",
                      "description": "Movies ka masla",
                      "tag": "#Marvel",
                      "date": "2022-07-02T11:32:44.999Z",
                      "__v": 0
                    },
                  
]
            const [notes, setNote] = useState(notesinitial)
return(
          <NoteContext.Provider value = {{notes,setNote}} >
                    {props.children}
          </NoteContext.Provider>

)
}

export default NoteState ;
