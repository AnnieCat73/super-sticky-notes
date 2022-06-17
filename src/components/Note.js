import React from 'react'

function Note({ id, title, content, deleteNote, editNote }) {
  return (
    <li className="note">
      <input
        type="text"
        placeholder="Title"
        className="note-title"
        value={title}
        onChange={(e) => editNote(id, "title", e.target.value)}
      />
      <textarea
        className="note-content"
        placeholder="Content..."
        value={content}
        onChange={(e) => editNote(id, "content", e.target.value)}
      ></textarea>
      <span
        className="note-delete"
        onClick={() => deleteNote(id)}
      >X</span>
    </li>
  )
}

export default Note