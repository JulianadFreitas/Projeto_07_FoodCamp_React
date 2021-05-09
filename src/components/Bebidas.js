import Bebida from "./Bebida"
import React from "react";

export default function Bebidas(props) {
    
    const {todos, setTodos, bebidasPedidos, setBebidasPedidos } = props;
    
    return ( <>
        <div className="nome-tipo">Agora, sua bebida</div>
        <div className="tipo primeira">
        {todos.bebidas.map((infoBebida, i) =>  (
            <Bebida todos={todos} setTodos={setTodos}
                bebidasPedidos={bebidasPedidos} setBebidasPedidos={setBebidasPedidos} 
                key={i}
                infoBebida = {infoBebida}
                indice={i} 
            /> 
        ))}
        </div></> 
   )}