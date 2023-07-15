import React, { useState } from 'react';

const CardAdicionar = () => {
  const [valor, setValor] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const isValorValido = valor.trim() !== '';

  const atualizarValor = (event) => {
    setValor(event.target.value);
  }

  const adicionarTarefa = (tarefasAntigas) => {
    if (isValorValido) {
      return [...tarefasAntigas, valor];
    } else {
      return tarefasAntigas;
    }
  }
  
  const handleAdicionarTarefa = () => {
    setTarefas(adicionarTarefa);
    setValor('');
  }

  const limparTabela = () => {
    setTarefas([]);
  }

  return (
    <div>
      <input 
        type="text"
        placeholder="Adicionar tarefa"
        value={valor} 
        onChange={atualizarValor} 
      />
      <button onClick={handleAdicionarTarefa}>Adicionar</button>
    </div>
  );
}

export default CardAdicionar;
