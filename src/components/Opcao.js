import React from "react";
export default function Opcao(props) {
  const {
    todos,
    setTodos,
    indice,
    infoOpcao,
    sobremesasPedidos,
    setSobremesasPedidos,
    bebidasPedidos,
    setBebidasPedidos,
    pratosPedidos,
    setPratosPedidos,
  } = props;

  const { src, alt, preco, titulo, subtitulo, contador, id } = infoOpcao;

  const [classeDiv, setClasseDiv] = React.useState("opcao");
  const todasSobremesas = todos.sobremesas;
  const todasBebidas = todos.bebidas;
  const todosPratos = todos.pratos;
  let pedidos = [];

  function SelecionarOpcao() {
    if (classeDiv === "opcao") {
      setClasseDiv("opcao selecionado");
      infoOpcao.contador = 1;
      const atualizado = { ...todos };
      setTodos(atualizado);

      if (id === 1) {
        pratosPedidos.push(todosPratos[indice]);
      } else if (id === 2) {
        bebidasPedidos.push(todasBebidas[indice]);
      } else if (id === 3) {
        sobremesasPedidos.push(todasSobremesas[indice]);
      }
    }
  }

  function Incrementa() {
    infoOpcao.contador = contador + 1;
    const atualizado = { ...todos };
    setTodos(atualizado);
  }

  function Decrementa() {
    infoOpcao.contador = contador - 1;
    const atualizado = { ...todos };
    setTodos(atualizado);

    if (contador === 1) {
      setClasseDiv("opcao");
      infoOpcao.contador = 0;
      const atualizado = { ...todos };
      setTodos(atualizado);

      if (id === 1) {
        pedidos = pratosPedidos.filter((item) => item.titulo !== titulo);
        setPratosPedidos(pedidos);
      } else if (id === 2) {
        pedidos = bebidasPedidos.filter((item) => item.titulo !== titulo);
        setBebidasPedidos(pedidos);
      } else if (id === 3) {
        pedidos = sobremesasPedidos.filter((item) => item.titulo !== titulo);
        setSobremesasPedidos(pedidos);
      }
    }
  }
  return (
    <div className={classeDiv} onClick={() => SelecionarOpcao(props)}>
      <img src={src} alt={alt} />
      <div className={"titulo"}>{titulo}</div>
      <div className={"subtitulo"}>{subtitulo}</div>
      <div className={"preco"}>
        {preco}
        <div className='contador'>
          <div onClick={Decrementa}> - </div>
          <div>{contador}</div>
          <div onClick={Incrementa}> + </div>
        </div>
      </div>
    </div>
  );
}
