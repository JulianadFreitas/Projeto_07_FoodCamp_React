import React from "react";
export default function CadaPrato(props) {
    const [classe, setClasse] = React.useState("opcao");
    const [contador, setContador] = React.useState(1);
    const [pratoSelecionado, setPratoSelecionado] = React.useState("");
    const [novaarray, setNovaarray] = React.useState([]);
    const lala = props.teste5;

    console.log(lala);
    const final =props.prato;
    console.log(final);
   

    function SelecionarPrato() {
      setPratoSelecionado([props.titulo, props.preco]);
      console.log(pratoSelecionado);
      if (classe === "opcao") {
        setClasse("opcao selecionado");
      }
    }
    function Incrementa() {
        setContador(contador + 1);
        setNovaarray([...pratoSelecionado, contador]);
        setPratoSelecionado(novaarray);
        console.log(pratoSelecionado);
    }
    
    function Decrementa() {
        setContador(contador - 1);
        setNovaarray([...pratoSelecionado, (contador -1)]);
        const teste = [...pratoSelecionado, (contador -1)];
        setPratoSelecionado(teste);
        console.log(teste);
        if (contador === 1) {
            setClasse("opcao");
            setContador(1);
        }
    }
    return (
      <div class={classe} onClick={() => SelecionarPrato(props)}> 
        <img src={props.src} alt={props.alt}/>
        <div class="titulo">{props.titulo}</div>
        <div class="subtitulo">{props.subtitulo}</div>
        <div class="preco">{props.preco}<div class="contador">
          <div onClick = {Decrementa}> - </div>
            <div>{contador}</div> 
            <div onClick = {Incrementa}> + </div>
         </div>
       </div>
     </div>
    )}



    // function ArrayPedido() {
    //     if (pratoSelecionado.length !== 0) {

    //     }
      
    // }
  