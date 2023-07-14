import React, { useState } from 'react';
import './App.css'

function CardAdicionar({ onAdicionarTarefa }) {
  const [textoTarefa, setTextoTarefa] = useState('');

  function atualizaEstadoTextoTarefa(event) {
    setTextoTarefa(event.target.value);
  }
  function handleAdicionarTarefa() {
    if (textoTarefa.trim() !== '') {
      onAdicionarTarefa(textoTarefa);
      setTextoTarefa('');
    }
  }
  
  return (
    <div>
      <input
        type="text"
        placeholder="Adicionar tarefa"
        value={textoTarefa}
        onChange={handleInputChange}
      />
      <button onClick={handleAdicionarTarefa}>Adicionar</button>
    </div>
  );
}

export default CardAdicionar;
