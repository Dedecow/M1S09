import React, { useState } from 'react';
import CardAdicionar from './components/CardAdicionar';

function App() {
  const [listaTarefas, setListaTarefas] = useState([
    { Id: 1, textoTarefa: "tarefa 1", finalizado: false }
  ]);

  const adicionarTarefa = (texto) => {
    const novaTarefa = { Id: listaTarefas.length + 1, textoTarefa: texto, finalizado: false };
    setListaTarefas([...listaTarefas, novaTarefa]);
  }

  return (
    <>
      <div>
        <CardAdicionar adicionarTarefa={adicionarTarefa} />
        <h1> Exercicio 4 Concluido ! ! ! </h1>
      </div>
    </>
  )
}

export default App;
