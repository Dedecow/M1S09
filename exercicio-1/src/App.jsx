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

<>

<CardAdicionar/>

<div>{ listaTarefas.map(tarefa => {<spam> {tarefa.textoTarefa} </spam>})}

</div>

</>

);

}


export default App;