import { useState } from 'react'
import './App.css'
import CardAdicionar from './componentes/CardAdicionar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Ex 1  Crição de projeto usando o Vite</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      
    </>
  )
}

export default App
