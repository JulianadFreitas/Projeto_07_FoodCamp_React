import React from "react";

export default function Prato(props) {
    const {
        todos, 
        setTodos,
        pratosPedidos, setPratosPedidos,
        indice, 
        infoPrato } = props;
    const {
        src, 
        alt, 
        preco, 
        titulo, 
        subtitulo, 
        contador} = infoPrato;

    const [classeDiv, setClasseDiv] = React.useState("opcao");
    const todosPratos = todos.pratos;
    let filtro = [];
    function SelecionarPrato() {
        if (classeDiv === "opcao") {
            setClasseDiv("opcao selecionado");
            infoPrato.contador = 1;
            const atualizado = {...todos};
            setTodos(atualizado);
            pratosPedidos.push(todosPratos[indice])
        }
    }

    function Incrementa() {
        infoPrato.contador = contador + 1;
        const atualizado = {...todos};
        setTodos(atualizado);
    }

    function Decrementa() {
        infoPrato.contador = contador - 1;
        const atualizado = {...todos};
        setTodos(atualizado);

        if (contador === 1) {
            setClasseDiv("opcao"); //AQUI
            infoPrato.contador = 0;
            const atualizado = {...todos};
            setTodos(atualizado);
            filtro = pratosPedidos.filter((item)=> item.titulo !== titulo);
            setPratosPedidos(filtro);
        }
    }
    return (
      <div className={classeDiv} onClick={() => SelecionarPrato(props)}> 
        <img src={src} alt={alt}/>
        <div className={"titulo"}>{titulo} </div>
        <div className={"subtitulo"}>{subtitulo}</div>
        <div className={"preco"}>{preco}
        <div className="contador">
          <div onClick = {Decrementa}> - </div>
          <div>{contador}</div> 
          <div onClick = {Incrementa}> +</div>
        </div>
        </div>
      </div>
    )
}