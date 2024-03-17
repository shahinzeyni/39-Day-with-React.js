import React from 'react'
import HOC from './HOC';


function JavascriptJs({title,price ,increaePriceBtn}) {
  return (
    <div>
      <h1>Course Title: {title}</h1>
      <button onClick={increaePriceBtn}>increace to {price}</button>
    </div>
  );
}


export default HOC(JavascriptJs,'JavaScript',2000);