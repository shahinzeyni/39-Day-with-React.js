import React,{memo} from 'react'

 const FilteredNotes = memo(({ notesArray }) => {
  console.log("FilteredNotes Run!")
  return (
    <>
      {notesArray
          .filter((note) => {
            console.log("Filtered Run!")
            return note.title.toLowerCase().includes("js");
          })
          .map((note) => (
            <ul key={note.id}>
              <li>{note.title}</li>
            </ul>
          ))}
    </>
  )
})

export default FilteredNotes;