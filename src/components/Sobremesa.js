import CadaSobremesa from "./CadaSobremesa.js";

export default function Sobremesa() {
    const sobremesas = [
    {num:"um", src:"imagens/brownie.jpg", alt:"brownie", titulo:"Brownie", subtitulo:"Com cobertura", preco:"R$ 7,90" }, 
    {num:"dois", src:"imagens/pudim 1.png", alt:"Pudim", titulo:"Pudim", subtitulo:"Apenas pudim", preco:"R$ 8,90"},
    {num:"tres", src:"imagens/sorvete.jpg", alt:"Sorvete", titulo:"Sorvete", subtitulo:"Sabor: nozes", preco:"R$ 9,90 "},
    {num:"quatro", src:"imagens/cenoura.jpg", alt:"Bolo de cenoura", titulo:"Bolo de cenoura", subtitulo:"com cobertura de chocolate", preco:"R$ 10,90"}];
    
    return ( <>
        <div class="nome-tipo">Por fim, sua sobremesa</div>
        <div class="tipo primeira">
        { sobremesas.map( itens => {
            return (
                   <CadaSobremesa src={itens.src} alt = {itens.alt} titulo ={itens.titulo} subtitulo={itens.subtitulo} preco={itens.preco} /> 
            );
        })}
  </div></> 
   )
}