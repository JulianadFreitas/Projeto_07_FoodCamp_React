import React from "react";

export default function CadaBebida(props) {
    //const {todosPratos, setTodosPratos} = props;
    //todos.pratos.objeto[i].contador = "troquei contador de prato1";
   
    const {todos, setTodos, indice, infoBebida} = props;
    console.log(todos);
    const {src, alt, preco, titulo, subtitulo, contador, controle} = infoBebida;
    const [classeDiv, setClasseDiv] = React.useState("opcao");
    console.log(infoBebida);
    //const [contador, setContador] = React.useState(1);
    //const [pratoSelecionado, setPratoSelecionado] = React.useState("");

    function SelecionarBebida() {
     // setPratoSelecionado([props.titulo, props.preco]);
     // console.log(pratoSelecionado);
      if (classeDiv === "opcao") {
        setClasseDiv("opcao selecionado"); //AQUI
        infoBebida.contador = 1;
        infoBebida.controle = true;
        console.log(infoBebida.controle);
        console.log(infoBebida.contador);
        const atualizado = {...todos};
        setTodos(atualizado)
      }
    }
    function Incrementa() {
        infoBebida.contador = contador +1;
        console.log(todos);
        const atualizado = {...todos};
        console.log(todos);
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
            infoBebida.controle = false;
            console.log(infoBebida.controle);
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
    )}
