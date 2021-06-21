import Opcao from "./Opcao";
import React from "react";

export default function Sobremesas(props) {
  const { todos, setTodos, sobremesasPedidos, setSobremesasPedidos } = props;

  return (
    <>
      <div className='nome-tipo'>Por fim, sua sobremesa</div>
      <div className='tipo primeira'>
        {todos.sobremesas.map((infoOpcao, i) => (
          <Opcao
            todos={todos}
            setTodos={setTodos}
            key={i}
            sobremesasPedidos={sobremesasPedidos}
            setSobremesasPedidos={setSobremesasPedidos}
            infoOpcao={infoOpcao}
            indice={i}
          />
        ))}
      </div>
    </>
  );
}
