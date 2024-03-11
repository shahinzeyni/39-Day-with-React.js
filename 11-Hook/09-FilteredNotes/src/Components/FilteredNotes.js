// import { useMemo } from "react"
import React,{useMemo} from 'react'

export default function FilteredNotes({ notesArray }) {
  return (
    <>
      {useMemo(() => {
        return notesArray
          .filter((note) => {
            return note.title.toLowerCase().includes("js");
          })
          .map((note) => (
            <ul key={note.id}>
              <li>{note.title}</li>
            </ul>
          ));
      }, [notesArray])}
    </>
  );
}
