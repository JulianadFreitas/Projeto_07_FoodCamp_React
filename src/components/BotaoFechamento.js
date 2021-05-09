import React from "react";
export default function BotaoFechamento(props) {
  const {
    todos,
    pratosPedidos,
    bebidasPedidos,
    sobremesasPedidos
  } = props;

  let classeDiv = "verde escondido";
  let classe = "fechamento";
  let contPrato = 0;
  let contBebida = 0;
  let contSobremesa = 0;
  let controleP = "aha";
  let controleB = "aha";
  let pratos = "";
  let bebidas = "";
  let sobremesas = "";
  let total =0;

  pratosPedidos.map((item) => {
    if (item.contador === 0) {
      return;
    } else pratos += item.titulo + " (" + item.contador + "x) ";
  });
  bebidasPedidos.map((item) => {
    if (item.contador === 0) {
      return;
    } else bebidas += item.titulo + " (" + item.contador + "x) ";
  });
  sobremesasPedidos.map((item) => {
    if (item.contador === 0) {
      return;
    } else sobremesas += item.titulo + " (" + item.contador + "x) ";
  });

  todos.pratos.forEach((item) => (contPrato += item.contador));
  todos.bebidas.forEach((item) => (contBebida += item.contador, controleB = item.controle));
  todos.sobremesas.forEach((item) => (contSobremesa += item.contador));

  console.log(pratosPedidos, bebidasPedidos, controleP);

  if ((contPrato !== 0) && (contBebida !== 0) && (contSobremesa !== 0)) {
    classeDiv = "verde";
    classe = "fechamento escondido"
  } else {
    classeDiv = "verde escondido";
    classe = "fechamento";
  }

  function Wpp() {
    const texto = `Olá, gostaria de fazer o pedido:\n
        - Prato: ${pratos}\n
        - Bebida: ${bebidas}\n
        - Sobremesa: ${sobremesas}\n
          Total:  R$ \n`;
    const textoEncode = encodeURI(texto);
    const link = `https://wa.me/5581993089298?text=${textoEncode}`
    window.location.href = `https://wa.me/5581993089298?text= + ${textoEncode}`;
  }
  return ( <>
       <div class={classe}>
          <a>Selecione os 3 itens <br /> para fechar o pedido</a> </div>
           <div class={classeDiv} onClick ={Wpp}> 
          <a>Fechar pedido</a>
       </div>
    </>
  )
}