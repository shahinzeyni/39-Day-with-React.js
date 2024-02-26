import React,{useEffect} from 'react'

export default function User(props) {
    useEffect(() => {
        console.log("User.js ==> Component Mount");
        return () => {
            console.log("User.js ==> Component UnMount");
        }
    },[])

    function removeHandler(id){
        props.onRemove(id)
    }
  return (
    <div>
        <ul>
            <li>{props.name}<button onClick={() => removeHandler(props.id)} >Remove</button></li>
        </ul>
    </div>
  )
}
