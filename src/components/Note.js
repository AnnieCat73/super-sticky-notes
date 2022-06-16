import React from 'react'

function Note() {
  return (
    <li className="note">
      <input
        type="text"
        placeholder="Title"
        className="note-title"
      />
      <textarea
        className="note-content"
        placeholder="Content..."
      ></textarea>
      <span
        className="note-delete"
      >X</span>
    </li>
  )
}

export default Note