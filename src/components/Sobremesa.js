import React from "react";
export default function Sobremesa(props) {
   
    const {todos, setTodos, indice, infoSobremesa, sobremesasPedidos, setSobremesasPedidos} = props;
    console.log(todos);
    const {src, alt, preco, titulo, subtitulo, contador, controle} = infoSobremesa;
    const [classeDiv, setClasseDiv] = React.useState("opcao");
    const todasSobremesas = todos.sobremesas;
    let pedidos = [];
    function SelecionarSobremesa() {
      if (classeDiv === "opcao") {
        setClasseDiv("opcao selecionado"); 
        infoSobremesa.contador = 1;
        infoSobremesa.controle = true;
        const atualizado = {...todos};
        setTodos(atualizado)
        sobremesasPedidos.push(todasSobremesas[indice])
      }
    }
    function Incrementa() {
        infoSobremesa.contador = contador +1;
        const atualizado = {...todos};
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
            pedidos = sobremesasPedidos.filter((item)=>item.titulo != titulo);
            setSobremesasPedidos(pedidos);
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