import Opcao from "./Opcao";
import React from "react";

export default function Pratos(props) {
  const { todos, setTodos, pratosPedidos, setPratosPedidos } = props;

  return (
    <>
      <div className='nome-tipo'>Primeiro, seu prato</div>
      <div className='tipo primeira'>
        {todos.pratos.map((infoOpcao, i) => (
          <Opcao
            todos={todos}
            setTodos={setTodos}
            pratosPedidos={pratosPedidos}
            setPratosPedidos={setPratosPedidos}
            key={i}
            infoOpcao={infoOpcao}
            indice={i}
          />
        ))}
      </div>
    </>
  );
}
