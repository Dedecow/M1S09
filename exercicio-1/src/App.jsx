import React, { useState } from 'react';
import CardAdicionar from './components/CardAdicionar';
import ListItem from './components/ListItem';

function App() {
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = (texto) => {
    const novaTarefa = { Id: listaTarefas.length + 1, textoTarefa: texto, finalizado: false };
    setListaTarefas([...listaTarefas, novaTarefa]);
  }

  const finalizarTarefa = (tarefaId) => {
    setListaTarefas((prevState) =>
      prevState.map((tarefa) =>
        tarefa.Id === tarefaId ? { ...tarefa, finalizado: !tarefa.finalizado } : tarefa
      )
    );
  };

  return (
    <>
      <div>
        <CardAdicionar adicionarTarefa={adicionarTarefa} />
        <h1>Tarefas:</h1>
        <ListItem listaTarefas={listaTarefas} finalizarTarefa={finalizarTarefa} />
      </div>
    </>
  )
}

export default App;
