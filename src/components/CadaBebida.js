import React from "react";

export default function CadaBebida(props) {
    const {
        todos,
        setTodos,
        infoBebida
    } = props;
    const {
        src,
        alt,
        preco,
        titulo,
        subtitulo,
        contador,
        controle
    } = infoBebida;
    const [classeDiv, setClasseDiv] = React.useState("opcao");

    function SelecionarBebida() {
        if (classeDiv === "opcao") {
            setClasseDiv("opcao selecionado");
            infoBebida.contador = 1;
            infoBebida.controle = true;
            const atualizado = {
                ...todos
            };
            setTodos(atualizado)
        }
    }

    function Incrementa() {
        infoBebida.contador = contador + 1;
        const atualizado = {...todos};
        setTodos(atualizado);
    }

    function Decrementa() {
        infoBebida.contador = contador - 1;
        const atualizado = {...todos};
        setTodos(atualizado);

        if (contador === 1) {
            setClasseDiv("opcao"); 
            infoBebida.contador = 0;
            const atualizado = {...todos};
            setTodos(atualizado);
            infoBebida.controle = false;
        }
    }
    return (
      <div className={classeDiv} onClick={() => SelecionarBebida(props)}> 
        <img src={src} alt={alt}/>
        <div className={"titulo"}>{titulo}</div>
        <div className={"subtitulo"}>{subtitulo}</div>
        <div className={"preco"}>{preco}<div class="contador">
          <div onClick = {Decrementa}> - </div>
            <div>{contador}</div> 
            <div onClick = {Incrementa}> + </div>
         </div>
       </div>
      </div>
    )
}