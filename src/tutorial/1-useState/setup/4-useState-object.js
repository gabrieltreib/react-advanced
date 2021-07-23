import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 22,
    message: 'random text'
  });
  const changeMessage = () => {
    // ...person = deixe o objeto person igual, altere apenas message
    setPerson({ ...person, message: 'hello world' });
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={() => changeMessage()}>
        change message
      </button>
    </>
  )
};

export default UseStateObject;
