import Pratos from "./Pratos";
import Bebidas from "./Bebidas";
import Sobremesas from "./Sobremesas";
import Fechamento from "./Fechamento.js";
import React from "react";

export default function Corpo() {
  const [pratosPedidos, setPratosPedidos] = React.useState([]);
  const [bebidasPedidos, setBebidasPedidos] = React.useState([]);
  const [sobremesasPedidos, setSobremesasPedidos] = React.useState([]);
  const [todos, setTodos] = React.useState({
    pratos: [
      {
        id: 1,
        contador: 0,
        src: "imagens/frango_yin_yang 1.png",
        alt: "Prato com frango",
        titulo: "Frango Yin Yang",
        subtitulo: "Um pouco de batata, um pouco de salada",
        preco: "R$ 19,90 ",
      },
      {
        id: 1,
        contador: 0,
        src: "imagens/camarao.png",
        alt: "prato com camarao",
        titulo: "Camarão",
        subtitulo: "Acompanha molho especial",
        preco: "R$ 32,90",
      },
      {
        id: 1,
        contador: 0,
        src: "imagens/lasanha.jpg",
        alt: "prato com lasanha",
        titulo: "Lasanha",
        subtitulo: "Lasanha",
        preco: "R$ 20,90 ",
      },
      {
        id: 2,
        contador: 0,
        src: "imagens/hamburguer.jpg",
        alt: "prato com hambúrguer",
        titulo: "Hambúrguer",
        subtitulo: " Com fritas",
        preco: "R$ 25,90",
      },
    ],
    bebidas: [
      {
        id: 2,
        contador: 0,
        src: "imagens/coquinha_gelada 1.png",
        alt: "refrigerante de cola",
        titulo: "Coquinha",
        subtitulo: "Lata 350ml",
        preco: "R$ 4,90",
      },
      {
        id: 2,
        contador: 0,
        src: "imagens/limonada.jpg",
        alt: "limonada",
        titulo: "Limonada",
        subtitulo: "Copo 350ml",
        preco: "R$ 7,90",
      },
      {
        id: 2,
        contador: 0,
        src: "imagens/suco.jpg",
        alt: "Suco",
        titulo: "Suco",
        subtitulo: "Copo 250ml",
        preco: "R$ 6,90",
      },
      {
        id: 2,
        contador: 0,
        src: "imagens/heineken.jpg",
        alt: "cerveja",
        titulo: "Heineken",
        subtitulo: " Long neck 350ml",
        preco: "R$ 12,90",
      },
    ],
    sobremesas: [
      {
        id: 3,
        contador: 0,
        src: "imagens/brownie.jpg",
        alt: "brownie",
        titulo: "Brownie",
        subtitulo: "Com cobertura",
        preco: "R$ 7,90",
      },
      {
        id: 3,
        contador: 0,
        src: "imagens/pudim 1.png",
        alt: "Pudim",
        titulo: "Pudim",
        subtitulo: "Apenas pudim",
        preco: "R$ 8,90",
      },
      {
        id: 3,
        contador: 0,
        src: "imagens/sorvete.jpg",
        alt: "Sorvete",
        titulo: "Sorvete",
        subtitulo: "Sabor: nozes",
        preco: "R$ 9,90 ",
      },
      {
        id: 3,
        contador: 0,
        src: "imagens/cenoura.jpg",
        alt: "Bolo de cenoura",
        titulo: "Bolo de cenoura",
        subtitulo: "com cobertura de chocolate",
        preco: "R$ 10,90",
      },
    ],
  });

  return (
    <div className='corpo'>
      <Pratos
        todos={todos}
        setTodos={setTodos}
        pratosPedidos={pratosPedidos}
        setPratosPedidos={setPratosPedidos}
      />
      <Bebidas
        todos={todos}
        setTodos={setTodos}
        bebidasPedidos={bebidasPedidos}
        setBebidasPedidos={setBebidasPedidos}
      />
      <Sobremesas
        todos={todos}
        setTodos={setTodos}
        sobremesasPedidos={sobremesasPedidos}
        setSobremesasPedidos={setSobremesasPedidos}
      />
      <Fechamento
        todos={todos}
        setTodos={setTodos}
        pratosPedidos={pratosPedidos}
        setPratosPedidos={setPratosPedidos}
        bebidasPedidos={bebidasPedidos}
        setBebidasPedidos={setBebidasPedidos}
        sobremesasPedidos={sobremesasPedidos}
        setSobremesasPedidos={setSobremesasPedidos}
      />
    </div>
  );
}
