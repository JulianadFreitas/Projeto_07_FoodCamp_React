import React from "react";
export default function BotaoFechamento(props) {
  const {todos} = props;

  let classeDiv = "verde escondido";
  let classe = "fechamento";
  let contPrato = 0;
  let contBebida = 0;
  let contSobremesa = 0;
  
  todos.pratos.forEach((item) => (contPrato += item.contador));
  todos.bebidas.forEach((item) => (contBebida += item.contador));
  todos.sobremesas.forEach((item) => (contSobremesa += item.contador));

  console.log(contPrato, contSobremesa, contBebida);

  if ((contPrato !== 0) && (contBebida !== 0) && (contSobremesa !== 0)) {
    classeDiv = "verde";
    classe = "fechamento escondido"
  } else {
    classeDiv = "verde escondido";
    classe = "fechamento"
  }

  return ( 
      <>
       <div class={classe}>
          <a>Selecione os 3 itens <br /> para fechar o pedido</a> </div>
           <div class={classeDiv}> 
          <a>Fechar pedido</a>
       </div>
      </>
  )
}