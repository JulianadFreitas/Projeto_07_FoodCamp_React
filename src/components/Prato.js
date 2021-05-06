import CadaPrato from "./CadaPrato";
import React from "react";

export default function Prato() {
    const [dado, setDado] = React.useState("prato");
    const pratos = [
    {num:"um", src:"imagens/frango_yin_yang 1.png", alt:"Prato com frango", titulo:"Frango Yin Yang", subtitulo:"Um pouco de batata, um pouco de salada", preco:"R$ 19,90 " }, 
    {num:"dois", src:"imagens/camarao.png", alt:"prato com camarao", titulo:"Camarão", subtitulo:"Acompanha molho especial", preco:"R$ 19,90"},
    {num:"tres", src:"imagens/lasanha.jpg", alt:"prato com lasanha", titulo:"Lasanha", subtitulo:"Lasanha", preco:"R$ 20,90 "},
    {num:"quatro", src:"imagens/hamburguer.jpg", alt:"prato com hambúrguer", titulo:"Hambúrguer", subtitulo:" Com fritas", preco:"R$ 25,90"}];
    
    function SelecionarPrato(){
      setDado("opcao selecionado");
    }
    return ( <>
        <div class="nome-tipo">Primeiro, seu prato</div>
        <div class="tipo primeira">
        { pratos.map( (item) =>  (
                   <CadaPrato dado={dado} opcao ={item} seleciona = {SelecionarPrato} src={item.src} alt = {item.alt} titulo ={item.titulo} subtitulo={item.subtitulo} preco={item.preco} /> 
            )
    )}
  </div></> 
   )
}


