import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    //função que não faz a pagina se atualizar ao chamar a função handleSubmit
    e.preventDefault();
    if (firstName && email) {
      //if para testar se as 2 variáveis tem valor, se sim, verdadeiro
      //const person = {firstName: firstName, email: email};
      const person = { id: new Date().getTime().toString(), firstName, email };
      //id usado como "gambiarra", para poder deixar sempre um valor unico na opcao, quando for usado na pratica, analisar outra forma de tratar o id
      //a primeira forma de criar a constante que esta comentada, é uma funcionalidade da nova versão do JS, que caso a variavel tenha o mesmo nome da chave, não é necessário deixar explicito os dois
      setPeople(() => {
        //retorne para dentro da variavel pessoa tudo que esta dentro de person
        return [...people, person]
      });

      //setando o firstName e email para vazio, para "limpar" a tela
      setFirstName('')
      setEmail('')
    }
    else {
      console.log('empty values');
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit"> add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>)
};

export default ControlledInputs;
