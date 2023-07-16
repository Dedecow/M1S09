import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/cardAdicionar'


function App() {

  const [listaTarefas, setListaTarefas] = useState([
    {Id: 1, textoTarefa: "tarefa 1", finalizado: false}
  ]);
  const addTarefa = (texto) => {
    const novaTarefa = {Id: listaTarefas.length + 1 , textoTarefa: texto, finalizado: false}
    setListaTarefas = (novaTarefa)
  }
  return (
    <>
      <div>
        <h1> Exercicio 4 Concluido ! ! ! </h1>
        <CardAdicionar/>
        
        
      </div>
     
    </>
  )
}

export default App
