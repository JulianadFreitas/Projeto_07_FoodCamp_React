import React from "react";
export default function CadaBebida(props) {
    const [classe, setClasse] = React.useState("opcao");
    const [contador, setContador] = React.useState(1);
    const [bebidaSelecionada, setBebidaSelecionada] = React.useState("");

    function SelecionarBebida(props){
    //    (classe === "opcao")? setClasse("opcao selecionado") : setClasse("opcao") ; TOGGLE
    if (classe === "opcao"){
        setClasse("opcao selecionado");
        setBebidaSelecionada("");
    } else if (classe === "opcao selecionado"){
        setBebidaSelecionada([props.titulo,props.preco]);
        console.log(bebidaSelecionada);
    }
    }
    
    function Incrementa() {
        setContador(contador + 1);
    }
    function Decrementa() {
        setContador(contador - 1);
        if (contador === 1){
            setClasse("opcao");
            setContador(1);
        }
    }
    return (
      <div class={classe} onClick={() => SelecionarBebida(props)}> 
        <img src={props.src} alt={props.alt}/>
        <div class="titulo">{props.titulo}</div>
        <div class="subtitulo">{props.subtitulo}</div>
        <div class="preco">{props.preco}<div class="contador"> <div onClick = {Decrementa}> - </div> <div>{contador}</div> <div onClick = {Incrementa}> + </div></div>
       </div>
     </div>
    )

}

    