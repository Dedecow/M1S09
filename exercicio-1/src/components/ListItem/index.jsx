import React from 'react';

function ListItem(props) {
  return (
    <ul>
      {props.listaTarefas.map((tarefa) => (
        <li key={tarefa.Id}>
          {tarefa.finalizado ? <del>{tarefa.textoTarefa}</del> : tarefa.textoTarefa}
          <button onClick={() => props.finalizarTarefa(tarefa.Id)}>
            {tarefa.finalizado ? "Desfazer" : "Finalizar"}
          </button>
          <button onClick={() => props.apagarTarefa(tarefa.Id)}>Apagar</button>
        </li>
      ))}
    </ul>
  );
}

export default ListItem;
