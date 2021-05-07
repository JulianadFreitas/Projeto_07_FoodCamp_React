import Prato from "./Prato";
import Bebida from "./Bebida";
import Sobremesa from "./Sobremesa";

export default function Corpo(props) {

const teste2 = props.teste;
console.log(teste2);
const pratos = props.pratoSelecionado;
console.log(pratos);
const funcao = props.set;
console.log(funcao);

    return (
      <div class="corpo">
        <Prato teste3={teste2} pratos={pratos}/>
        <Bebida />
        <Sobremesa />
      </div>
    )
}