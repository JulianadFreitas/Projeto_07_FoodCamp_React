import Opcao from "./Opcao"
import React from "react";

export default function Bebidas(props) {
    
    const {
        todos, 
        setTodos, 
        bebidasPedidos, 
        setBebidasPedidos
        } = props;
    
    return ( <>
        <div className="nome-tipo">Agora, sua bebida</div>
        <div className="tipo primeira">
        { todos.bebidas.map((infoOpcao, i) =>  (
             <Opcao todos={todos} setTodos={setTodos} 
                key={i}
                bebidasPedidos={bebidasPedidos} setBebidasPedidos={setBebidasPedidos}
                infoOpcao = {infoOpcao}
                indice={i} 
            /> 
            ))}
  </div></> 
   )}