
import React from "react";

export default function CadaPrato(props) {
    const [classe, setClasse] = React.useState("prato");

    function SelecionarPrato(){
        setClasse("prato selecionado");
      }
    return (
      <div class={classe} onClick={SelecionarPrato}> 
        <img src={props.src} alt={props.alt}/>
        <div class="titulo">{props.titulo}</div>
        <div class="subtitulo">{props.subtitulo}</div>
        <div class="preco">{props.preco}<ion-icon name="checkmark-circle"></ion-icon>
       </div>
       </div>
    )
}