import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import HOCs from './HOCs';

const Question = ({ id, info, title ,toggleShowInfoHandler , showInfo }) => {
  return (
    <article className='question' onClick={toggleShowInfoHandler}>
      <header>
        <h4>{title}</h4>
        <button className='btn'>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default HOCs(Question);
