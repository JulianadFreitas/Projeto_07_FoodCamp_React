import React from "react";
export default function BotaoFechamento(props) {
  const {
    pratosPedidos,
    bebidasPedidos,
    sobremesasPedidos
  } = props;

  let classeDiv = "verde escondido";
  let classe = "fechamento";
  let contPrato = 0;
  let contBebida = 0;
  let contSobremesa = 0;
  let pratos = "";
  let bebidas = "";
  let sobremesas = "";
  let precoPratos = 0;
  let precoBebidas = 0;
  let precoSobremesas = 0;
  let total;
  let precototal;

  pratosPedidos.map((item) => {
    if (item.contador === 0) {
      return "";
    } else {
      contPrato += item.contador;
      pratos += item.titulo + " (" + item.contador + "x) ";
      precoPratos += parseFloat((item.preco).replace(',', '.').replace('R$', '') * item.contador);
    }
    return "";
  });

  bebidasPedidos.map((item) => {
    if (item.contador === 0) {
      return "";
    } else {
      contBebida += item.contador;
      bebidas += item.titulo + " (" + item.contador + "x) ";
      precoBebidas += parseFloat((item.preco).replace(',', '.').replace('R$', '') * item.contador);
    }
    return "";
  });

  sobremesasPedidos.map((item) => {
    if (item.contador === 0) {
      return "";
    } else {
      contSobremesa += item.contador;
      sobremesas += item.titulo + " (" + item.contador + "x) ";
      precoSobremesas += parseFloat((item.preco).replace(',', '.').replace('R$', '') * item.contador);
    }
    return "";
  });

  //(*1)Solução pouco semântica para realizar a soma, optei por fazer assim pois o ParseInt acabava por arredondar os valores o que acabava por não retornar o valor exato;

  precototal = (precoPratos * 1) + (precoBebidas * 1) + (precoSobremesas * 1);
  total = precototal.toFixed(2).replace('.', ',');

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
          Total:  R$ ${total} \n`;
    const textoEncode = encodeURI(texto);
    window.location.href = `https://wa.me/5581993089298?text= + ${textoEncode}`;
  }

  return ( 
     <>
     <div className={classe}>
        <a>Selecione os 3 itens <br /> para fechar o pedido</a> 
      </div>
     <div className={classeDiv} onClick ={Wpp}> 
        <a>Fechar pedido</a>
     </div>
     </>
  )
}