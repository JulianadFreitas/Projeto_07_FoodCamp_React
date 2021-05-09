import Sobremesa from "./Sobremesa";
import React from "react";

export default function Sobremesas(props) {
    const {todos, setTodos, sobremesasPedidos, setSobremesasPedidos} = props;
    return ( 
        <>
        <div className="nome-tipo">Por fim, sua sobremesa</div>
        <div className="tipo primeira">
        { todos.sobremesas.map((infoSobremesa, i) =>  (
             <Sobremesa todos={todos} setTodos={setTodos}
                sobremesasPedidos={sobremesasPedidos} setSobremesasPedidos={setSobremesasPedidos} 
                key={i}
                infoSobremesa = {infoSobremesa}
                indice={i} 
             /> 
        ))}
        </div>
        </> 
   )
}