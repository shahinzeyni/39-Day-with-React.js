import React from 'react'
import { useEffect,useState } from 'react';

// export default function useUpdateLoger(valueInput) {
//   useEffect(() => {
//     console.log(valueInput);
//   },[valueInput])
//   return (
//     <div>

//     </div>
//   )
// }
// ---------------------


export default function useUpdateLoger(valueInput) {
  const [value,setValue] = useState(valueInput)

  useEffect(() => {
    console.log(value);
  },[value])

  return [value,setValue]
}
