import { useState } from 'react';

function CardAdicionar(props) {

  const [textoTarefa, setTextoTarefa] = useState("");
  
// const isValorValido = valor.trim() !== '';
// function atualizarValor(event) {
//   setTextoTarefa(event.target.value);
// }


  function handleAdicionarTarefa() {
    props.adicionarTarefa(textoTarefa);
    setTextoTarefa("");
    }
  
  
  //function handleAdicionarTarefa() {
  //  setTextoTarefa(adicionarTarefa);
  //  setTextoTarefa('');
  //}

  //const limparTabela = () => {
  //  setTarefas([]);
  //}

  return (
    <div>
      <input 
        type="text"
        placeholder="Adicionar tarefa"
        value={textoTarefa} 
        onChange={(evento)=> setTextoTarefa(evento.target.value)} 
      />
      <button onClick={()=>handleAdicionarTarefa()}>Adicionar</button>
    </div>
  );
}

export default CardAdicionar;
