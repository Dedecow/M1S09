import React, { useState } from 'react';

const CardAdicionar = () => {
  const [valor, setValor] = useState('');

  const atualizarValor = (event) => {
    setValor(event.target.value);
  }

  return (
    <div>
      <input 
        type="text"
        placeholder="Adicionar tarefa"
        value={valor} 
        onChange={atualizarValor} 
      />
      <p>Tarefa</p>
    </div>
  );
}

export default CardAdicionar;
