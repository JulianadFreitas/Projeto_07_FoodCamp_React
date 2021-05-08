import React from "react";

export default function CadaPrato(props) {
    const {
        todos, 
        setTodos, 
        infoPrato } = props;
    const {
        src, 
        alt, 
        preco, 
        titulo, 
        subtitulo, 
        contador, 
        controle} = infoPrato;
        
    const [classeDiv, setClasseDiv] = React.useState("opcao");

    function SelecionarPrato() {
        if (classeDiv === "opcao") {
            setClasseDiv("opcao selecionado");
            infoPrato.contador = 1;
            infoPrato.controle = true;
            const atualizado = {...todos};
            setTodos(atualizado)
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
            infoPrato.controle = false;
        }
    }
    return (
      <div className={classeDiv} onClick={() => SelecionarPrato(props)}> 
        <img src={src} alt={alt}/>
        <div className={"titulo"}>{titulo}</div>
        <div className={"subtitulo"}>{subtitulo}</div>
        <div className={"preco"}>{preco}
        <div class="contador">
          <div onClick = {Decrementa}> - </div>
          <div>{contador}</div> 
          <div onClick = {Incrementa}> + </div>
        </div>
        </div>
      </div>
    )
}