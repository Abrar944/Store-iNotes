import React from "react";
import NoteContext from "./notesContext";
import { useState } from "react";

const NoteState = (props)=>{
          const s1  = {
                    "name":"Muhammed",
                    "class":"all"
          }
          const [state, setstate] = useState(s1)
          const update =()=>{
                    setTimeout(() => {
                              setstate  ({
                                        "name":"Abrar",
                                        "class":"sports"         
                              })
                    }, 1000);
          }
          

return(
          <NoteContext.Provider value = {{state, update} } >
                    {props.children}
          </NoteContext.Provider>

)
}

export default NoteState ;
