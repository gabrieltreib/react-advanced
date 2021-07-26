import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value >= 1) {
      document.title = `new message (${value})`;
    } else {

    }
    //se você quer que o useEffect execute apenas uma vez, colocar o array vazio
    //como segundo parâmetro
  }, [value]);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => { setValue(value + 1) }}> click me </button>
    </>
  );
};

export default UseEffectBasics;
