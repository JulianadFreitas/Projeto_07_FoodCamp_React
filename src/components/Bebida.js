import CadaBebida from "./CadaBebida";

export default function Bebida() {
    const bebidas = [
    {num:"um", src:"imagens/coquinha_gelada 1.png", alt:"refrigerante de cola", titulo:"Coquinha", subtitulo:"Lata 350ml", preco:"R$ 4,90" }, 
    {num:"dois", src:"imagens/limonada.jpg", alt:"limonada", titulo:"Limonada", subtitulo:"Copo 350ml", preco:"R$ 7,90"},
    {num:"tres", src:"imagens/suco.jpg", alt:"Suco", titulo:"Suco", subtitulo:"Copo 250ml", preco:"R$ 6,90"},
    {num:"quatro", src:"imagens/heineken.jpg", alt:"cerveja", titulo:"Heineken", subtitulo:" Long neck 350ml", preco:"R$ 12,90"}];
    
    return ( <>
        <div class="nome-tipo">Agora, sua bebida</div>
        <div class="tipo primeira">
        { bebidas.map( item => {
            return (
                <CadaBebida src={item.src} alt = {item.alt} titulo ={item.titulo} subtitulo={item.subtitulo} preco={item.preco} />
            );
        })}
  </div></> 
   );
 
}

