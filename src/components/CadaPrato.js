import React from "react";

export default function CadaPrato(props) {
    //const {todosPratos, setTodosPratos} = props;
    //todos.pratos.objeto[i].contador = "troquei contador de prato1";
   
    const {todos, setTodos, indice, infoPrato} = props;
    console.log(todos);
    const {src, alt, preco, titulo, subtitulo, contador, controle} = infoPrato;
    const [classeDiv, setClasseDiv] = React.useState("opcao");
    console.log(infoPrato);
    //const [contador, setContador] = React.useState(1);
    //const [pratoSelecionado, setPratoSelecionado] = React.useState("");

    function SelecionarPrato() {
     // setPratoSelecionado([props.titulo, props.preco]);
     // console.log(pratoSelecionado);
      if (classeDiv === "opcao") {
        setClasseDiv("opcao selecionado"); //AQUI
        infoPrato.contador = 1;
        infoPrato.controle = true;
        console.log(infoPrato.controle);
        console.log(infoPrato.contador);
        const atualizado = {...todos};
        setTodos(atualizado)
      }
    }
    function Incrementa() {
        infoPrato.contador = contador +1;
        console.log(todos);
        const atualizado = {...todos};
        console.log(todos);
        setTodos(atualizado);
    }
    function Decrementa() {
        infoPrato.contador = contador -1;
        const atualizado = {...todos};
        setTodos(atualizado);
    
        if (contador === 1) {
            setClasseDiv("opcao");  //AQUI
            infoPrato.contador  = 0;
            const atualizado = {...todos};
            setTodos(atualizado);
            infoPrato.controle = false;
            console.log(infoPrato.controle);
        }
    }
    return (
      <div className={classeDiv} onClick={() => SelecionarPrato(props)}> 
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
