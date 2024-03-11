import React, { useMemo, useState } from 'react'
import FilteredNotes from './Components/FilteredNotes'
export default function App() {
  const [notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState('')

  const addNewNote = () => {
    let newNoteObj = {
      id: notes.length + 1 ,
      title : newNote
    }

    setNotes(prevNote => [...notes,newNoteObj])
    setNewNote('')
  }

  return (
    <div>
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={addNewNote}>Add</button>

      <hr />
      <h2>add Items</h2>
      {notes.map((note) => (
        <ul key={note.id}>
          <li>{note.title}</li>
        </ul>
      ))}

      <hr />
      <h2>title includes js</h2>

        <FilteredNotes notesArray={notes}  />
      {/* {useMemo(() => {
        return notes
          .filter((note) => {
            return note.title.toLowerCase().includes("js");
          })
          .map((note) => (
            <ul key={note.id}>
              <li>{note.title}</li>
            </ul>
          ));
      }, [notes])} */}

      {/* {useMemo(
        () =>
          notes
            .filter((note) => note.title.toLowerCase().includes("js"))
            .map((note) => (
              <ul key={note.id}>
                <li>{note.title}</li>
              </ul>
            )),
        [notes]
      )} */}

      {/* {
        notes.filter((note) => {
        return note.title.toLowerCase().includes("js");
      }).map((note) => (
        <ul key={note.id}>
          <li>{note.title}</li>
        </ul>
      ))
      } */}
    </div>
  );
}
