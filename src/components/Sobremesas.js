import Sobremesa from "./Sobremesa";
import React from "react";

export default function Sobremesas(props) {
    const {todos, setTodos, sobremesasPedidos, setSobremesasPedidos} = props;
    return ( 
        <>
        <div class="nome-tipo">Por fim, sua sobremesa</div>
        <div class="tipo primeira">
        { todos.sobremesas.map((infoSobremesa, i) =>  (
             <Sobremesa todos={todos} setTodos={setTodos}
                sobremesasPedidos={sobremesasPedidos} setSobremesasPedidos={setSobremesasPedidos} 
                key={infoSobremesa.id}
                infoSobremesa = {infoSobremesa}
                indice={i} 
             /> 
        ))}
        </div>
        </> 
   )
}