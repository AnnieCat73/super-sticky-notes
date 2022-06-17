import { useState, useEffect } from "react";
import Header from './components/Header';
import AddSearch from './components/AddSearch';
import Note from './components/Note';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(window.localStorage.getItem("notes")) || []
  );

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      content: ""
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const editNote = (id, field, text) =>
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id !== id) {
          return note;
        } else {
          if (field === "title") {
            return { ...note, title: text };
          } else {
            return { ...note, content: text };
          }
        }
      });
    });

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header />
        <AddSearch
          addNote={addNote}
          setSearchText={setSearchText}
          searchText={searchText}
          handleToggleDarkMode={setDarkMode}
        />

        <ul className="notes-list">
          {notes
            .filter(
              (note) =>
                note.title.toLowerCase().includes(searchText.toLowerCase()) ||
                note.content.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((note) => (
              <Note
                key={note.id}
                {...note}
                deleteNote={deleteNote}
                editNote={editNote}
              />

            ))}
        </ul>

        <Footer />
      </div>
    </div>

  );
}

export default App;
