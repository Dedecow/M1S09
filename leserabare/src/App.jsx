import CardAdicionar from './components/CardAdicionar';

import {useState} from 'react';


function App() {

const [listaTarefas, setListaTarefas] = useState ([

{Id: 1, textoTarefa: "Tarefa 1", finalizado: false}

])


var adicionarTarefa = (texto) => {

var novaTarefa = {Id:listaTarefas.lenght +1, textoTarefa: "Tarefa1", finalizado: false}

setListaTarefas = [...listaTarefas, setListaTarefas]

}


return (
  <div className="App">
    <CardAdicionar adicionarTarefa={adicionarTarefa} />
    <h1>Tarefas:</h1>
    <ul>
      {listaTarefas.map((tarefa) => (
        <li key={tarefa.id}>{tarefa.textoTarefa}</li>
      ))}
    </ul>
  </div>
);
}

export default App;