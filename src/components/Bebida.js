import React from "react";

export default function Bebida(props) {
   
    const {todos, setTodos, indice, infoBebida, bebidasPedidos, setBebidasPedidos} = props;
  
    const {src, alt, preco, titulo, subtitulo, contador} = infoBebida;
    const [classeDiv, setClasseDiv] = React.useState("opcao");
    
    const todasBebidas = todos.bebidas;
    let pedidos = [];
    function SelecionarBebida() {
      if (classeDiv === "opcao") {
        setClasseDiv("opcao selecionado"); //AQUI
        infoBebida.contador = 1;
        const atualizado = {...todos};
        setTodos(atualizado)
        bebidasPedidos.push(todasBebidas[indice])
      }
    }
    function Incrementa() {
        infoBebida.contador = contador +1;
        const atualizado = {...todos};
        setTodos(atualizado);
    }
    function Decrementa() {
        infoBebida.contador = contador -1;
        const atualizado = {...todos};
        setTodos(atualizado);
    
        if (contador === 1) {
            setClasseDiv("opcao");  //AQUI
            infoBebida.contador  = 0;
            const atualizado = {...todos};
            setTodos(atualizado);
            pedidos = bebidasPedidos.filter((item)=>item.titulo !== titulo);
            setBebidasPedidos(pedidos);
        }
    }
    return (
      <div className={classeDiv} onClick={() => SelecionarBebida(props)}> 
        <img src={src} alt={alt}/>
        <div className={"titulo"}>{titulo}</div>
        <div className={"subtitulo"}>{subtitulo}</div>
        <div className={"preco"}>{preco}<div className="contador">
          <div onClick = {Decrementa}> - </div>
            <div>{contador}</div> 
            <div onClick = {Incrementa}> + </div>
         </div>
       </div>
     </div>
    )}
