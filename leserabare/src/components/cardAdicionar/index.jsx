import React, { useState } from 'react';


function CardAdicionar() {

const [valorImput, setValorImput] = useState('');


const manipulaAlteracaoImput = (e) => {

setValorImput(e.target.value);

};


const handleButtonClick = () => {

setValorImput(valorImput);

};


return (
    <div>
      <input
        type="text"
        placeholder="Adicionar tarefa"
        value={textoTarefa}
        onChange={(evento) => setTextoTarefa(evento.target.value)}
      />
      <button
        onClick={() => {
          props.adicionarTarefa(textoTarefa);
          setTextoTarefa('');
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default CardAdicionar;