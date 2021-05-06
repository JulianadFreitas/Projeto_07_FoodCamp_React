export default function CadaSobremesa(props) {
    return (
      <>
        <img src={props.src} alt={props.alt}/>
        <div class="titulo">{props.titulo}</div>
        <div class="subtitulo">{props.subtitulo}</div>
        <div class="preco">{props.preco}<ion-icon name="checkmark-circle"></ion-icon>
       </div>
    </>
    )
}