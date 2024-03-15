//? ============== FIRST WAY=============
// import React, { useState } from 'react'
// import './App.css';
// export default function App() {
//   const [user,setUser] = useState("")
//   const [pass,setPass] = useState("")
//   const sumbmitedHadler = (event) => {
//     event.preventDefault()
//     setPass("")
//     setUser("")
//   }
//   return (
//     <div className="login-page" onSubmit={sumbmitedHadler}>
//       <div className="form">
//         <form className="login-form" >
//           <input type="text"
//           onChange={(e) => setUser(e.target.value)}
//           value={user}
//             placeholder="Username" />

//           <input type="password"
//           onChange={(e) => setPass(e.target.value)}
//             value={pass}
//             placeholder="Password" />
//           <button>login</button>
//           <p className="message">Not registered? <a href="#">Create an account</a></p>

//         </form>
//       </div>
//     </div>
//   )
// }

// ?================SECOND WAY==============

import React, { useState } from 'react'
import UseInput from './Components/UseInput';
import './App.css';


export default function App() {
  const [userValue,userBinding,userResetInp] = UseInput("")
  const [passValue,passBinding,passResetInp] = UseInput("")

  const sumbmitedHadler = (event) => {
    event.preventDefault()
    alert("Hi, "+ userValue)
    userResetInp()
    passResetInp()
  }
  return (
    <div className="login-page" onSubmit={sumbmitedHadler}>
      <div className="form">
        <form className="login-form" >
          <input type="text"
          {...userBinding}
            placeholder="Username" />

          <input type="password"
            {...passBinding}
            placeholder="Password" />
          <button>login</button>
          <p className="message">Not registered? <a href="#">Create an account</a></p>

        </form>
      </div>
    </div>
  )
}
