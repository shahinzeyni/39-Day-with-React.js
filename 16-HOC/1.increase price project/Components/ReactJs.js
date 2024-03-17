import React from 'react'
import HOC from './HOC';

function ReactJs({title , price , increaePriceBtn}) {
  return (
    <div>
      <h1>Course Title: {title}</h1>
      <button onClick={increaePriceBtn} >increace to {price}</button>
    </div>
  )
}
export default HOC(ReactJs,'JavaScript' , 2_500_000);
