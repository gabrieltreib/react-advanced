import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  //criando a constante people 2 e adicionando o conteúdo de 'data' para dentro dela
  //usando o spread operator.
  //após isso, apenas passado a variável people2 para dentro do método setPeople
  //chamado no click do botão 'restore items'
  const people2 = [];
  people2.push(...data);

  const removePeople = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>

      {people.map((person) => {
        //desestruturando o array person em 2 variáveis
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removePeople(id)}> remove </button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])} > clear items </button>
      <button className='btn' onClick={() => setPeople(people2)}> restore items </button>
    </>
  );
};

export default UseStateArray;
