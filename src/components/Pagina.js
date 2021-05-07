import Corpo from "./Corpo";
import BotaoFechamento from "./BotaoFechamento";
import React from "react";

export default function Pagina() {


 //Estado que ira se alterado no CadaPrato passando pelo caminho
  const [estado, setEstado] = React.useState("lala");
  const [pratoSelecionado, setPratoSelecionado] = React.useState("testandoprato");

    return (
      <div class="pagina">
        <div class="topo">
          <div class="logo">FoodCamp<p>Sua comida em 6 minutos</p>
          </div>
        </div>
        <Corpo teste= {estado} pratoSelecionado={pratoSelecionado} set={setPratoSelecionado}/>
        <BotaoFechamento />
      </div>
    )
  }