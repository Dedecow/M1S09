import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/cardAdicionar'


function App() {

  const [listaTarefas, setListaTarefas] = useState([
    {textoTarefa: "tarefa 1", finalizado: false}
  ]);

  return (
    <>
      <div>
        <h1> Exercicio 3 Concluido ! ! ! </h1>
        <CardAdicionar/>
        
        
      </div>
     
    </>
  )
}

export default App
