import React from 'react'

function AddSearch() {
  return (
    <div>
      <button className="add-btn">+ New Note</button>
      <input
        type="text"
        className="search"
        placeholder="Type here to seach..."

      />

    </div>
  )
}

export default AddSearch