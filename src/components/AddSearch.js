import React from 'react'

function AddSearch({ addNote, setSearchText, searchText, handleToggleDarkMode }) {
  return (
    <div className="add-search">
      <div className="app-controls">
        <button
          className="add-btn"
          onClick={addNote}
        >+ New Note</button>
        <input
          type="text"
          className="search"
          placeholder="Type here to seach..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <button
        className="toggle"
        onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}
      >Toggle Mode</button>
    </div>
  )
}

export default AddSearch;