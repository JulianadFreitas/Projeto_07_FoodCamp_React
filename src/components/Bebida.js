import CadaBebida from "./CadaBebida"
import React from "react";

export default function Bebida(props) {
    
    const {todos, setTodos} = props;
    console.log(todos);
    
    return ( <>
        <div class="nome-tipo">Agora, sua bebida</div>
        <div class="tipo primeira">
        { todos.bebidas.map((infoBebida, i) =>  (
             <CadaBebida todos={todos} setTodos={setTodos} key={infoBebida.id}
                   infoBebida = {infoBebida}
                   indice={i} 
                   /> 
            ))}
  </div></> 
   )}