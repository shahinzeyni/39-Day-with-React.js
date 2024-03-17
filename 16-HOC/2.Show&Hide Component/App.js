import React from 'react'
import HOC from './Component/HOC'

function App({showHandler, isShow}) {
  return (
    <div>
      <button
       onClick={showHandler}
       > {isShow ? "-" : "+"} </button>
      {isShow && (
        <>
          <input type="text" />
          <button>Add New Note</button>
        </>
      )}
    </div>
  );
}

export default HOC(App)