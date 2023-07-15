import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/cardAdicionar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> Exercicio 2 Concluido ! ! ! </h1>
        <CardAdicionar/>
        
        
      </div>
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        </p>
      </div>
      <p className="read-the-docs">
      </p>
    </>
  )
}

export default App
