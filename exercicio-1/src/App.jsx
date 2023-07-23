import React, { useState } from 'react';
import CardAdicionar from './components/CardAdicionar';
import ListItem from './components/ListItem';
import './App.css';

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

  const apagarTarefa = (tarefaId) => {
    setListaTarefas((prevState) =>
      prevState.filter((tarefa) => tarefa.Id !== tarefaId)
    );
  };

  return (
    <>
      <div>
        <CardAdicionar adicionarTarefa={adicionarTarefa} />
        <h1>Tarefas:</h1>
        <ListItem
          listaTarefas={listaTarefas}
          finalizarTarefa={finalizarTarefa}
          apagarTarefa={apagarTarefa}
        />
      </div>
    </>
  )
}

export default App;
