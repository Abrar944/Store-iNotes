import React from 'react'

export const Notesitem = (props) => {
          const {note} = props 
  return (
          <div className='col-md-3' >
          <div className="card  my-3">
          <div className="card-body my-3 ">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus consequatur provident, dolorem rerum ex minima libero, similique maxime enim facilis esse. Atque dolores dolore nulla, quod laudantium repudiandae mollitia esse.</p>
          </div>
        </div>
        </div>
  )
}
