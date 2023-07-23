import React, { useState } from 'react';

function CardAdicionar(props) {
  const [valorInput, setValorInput] = useState('');

  const manipulaAlteracaoInput = (e) => {
    setValorInput(e.target.value);
  };

  const handleButtonClick = () => {
    if (valorInput.trim() !== '') {
      props.adicionarTarefa(valorInput);
      setValorInput('');
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Adicionar tarefa"
          value={valorInput}
          onChange={manipulaAlteracaoInput}
        />
        <button onClick={handleButtonClick}>Adicionar</button>
      </div>
    </>
  );
}

export default CardAdicionar;
