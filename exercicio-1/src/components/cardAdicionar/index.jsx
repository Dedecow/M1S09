import React, { useState } from 'react';

function CardAdicionar(props) {
  const [valorImput, setValorImput] = useState('');

  const manipulaAlteracaoImput = (e) => {
    setValorImput(e.target.value);
  };

  const handleButtonClick = () => {
    if (valorImput.trim() !== '') {
      props.adicionarTarefa(valorImput);
      setValorImput('');
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="adicionar tarefa"
          value={valorImput}
          onChange={manipulaAlteracaoImput}
        />
        <button onClick={handleButtonClick}>Adicionar</button>
      </div>
    </>
  );
}

export default CardAdicionar;
