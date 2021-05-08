import React from "react";
export default function CadaSobremesa(props) {
    //const {todosPratos, setTodosPratos} = props;
    //todos.pratos.objeto[i].contador = "troquei contador de prato1";
   
    const {todos, setTodos, indice, infoSobremesa} = props;
    console.log(todos);
    const {src, alt, preco, titulo, subtitulo, contador, controle} = infoSobremesa;
    const [classeDiv, setClasseDiv] = React.useState("opcao");
    console.log(infoSobremesa);
    //const [contador, setContador] = React.useState(1);
    //const [pratoSelecionado, setPratoSelecionado] = React.useState("");

    function SelecionarSobremesa() {
     // setPratoSelecionado([props.titulo, props.preco]);
     // console.log(pratoSelecionado);
      if (classeDiv === "opcao") {
        setClasseDiv("opcao selecionado"); //AQUI
        infoSobremesa.contador = 1;
        infoSobremesa.controle = true;
        console.log(infoSobremesa.controle);
        console.log(infoSobremesa.contador);
        const atualizado = {...todos};
        setTodos(atualizado)
      }
    }
    function Incrementa() {
        infoSobremesa.contador = contador +1;
        console.log(todos);
        const atualizado = {...todos};
        console.log(todos);
        setTodos(atualizado);
    }
    function Decrementa() {
        infoSobremesa.contador = contador -1;
        const atualizado = {...todos};
        setTodos(atualizado);
    
        if (contador === 1) {
            setClasseDiv("opcao");  //AQUI
            infoSobremesa.contador  = 0;
            const atualizado = {...todos};
            setTodos(atualizado);
            infoSobremesa.controle = false;
            console.log(infoSobremesa.controle);
        }
    }
    return (
      <div className={classeDiv} onClick={() => SelecionarSobremesa(props)}> 
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
    )}