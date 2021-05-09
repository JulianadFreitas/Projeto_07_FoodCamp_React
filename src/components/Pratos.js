import Prato from "./Prato";
import React from "react";

export default function Pratos(props) {
    const {todos, setTodos, pratosPedidos, setPratosPedidos} = props;
    return (
        <>
        <div class="nome-tipo">Primeiro, seu prato</div>
        <div class="tipo primeira">
          {todos.pratos.map((infoPrato, i) =>  (
             <Prato todos={todos} setTodos={setTodos} pratosPedidos={pratosPedidos} setPratosPedidos={setPratosPedidos}
                key={infoPrato.id}
                infoPrato = {infoPrato}
                indice={i}/> 
          ))}
        </div>
        </> 
   )}