import React from 'react'
import { useState } from 'react'
import useUpdateLoger from './Components/useUpdateLoger'

// export default function App() {
//   const [value,setValue] = useState('')
//   useUpdateLoger(value)


//   return (
//     <div>
//         <input 
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//            />
//     </div>
//   )
// }


// --------------------

export default function App() {
  const [value,setValue] = useUpdateLoger('')
  
  return (
    <div>
        <input 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
           />
    </div>
  )
}
