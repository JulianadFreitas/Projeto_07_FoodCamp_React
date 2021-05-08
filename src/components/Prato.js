import CadaPrato from "./CadaPrato";
import React from "react";

export default function Prato(props) {
    const {todos, setTodos} = props;
    return (
        <>
        <div class="nome-tipo">Primeiro, seu prato</div>
        <div class="tipo primeira">
          { todos.pratos.map((infoPrato, i) =>  (
             <CadaPrato todos={todos} setTodos={setTodos}
                key={infoPrato.id}
                infoPrato = {infoPrato}
                indice={i}/> 
           ))}
        </div>
        </> 
   )}