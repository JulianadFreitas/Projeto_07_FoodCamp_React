import CadaSobremesa from "./CadaSobremesa";
import React from "react";

export default function Sobremesa(props) {
    const {todos, setTodos} = props;
    return ( 
        <>
        <div class="nome-tipo">Por fim, sua sobremesa</div>
        <div class="tipo primeira">
        { todos.sobremesas.map((infoSobremesa, i) =>  (
             <CadaSobremesa todos={todos} setTodos={setTodos} 
                key={infoSobremesa.id}
                infoSobremesa = {infoSobremesa}
                indice={i} 
             /> 
        ))}
        </div>
        </> 
   )
}