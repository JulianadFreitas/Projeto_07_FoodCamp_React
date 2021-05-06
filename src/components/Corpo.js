import Prato from "./Prato";
import Bebida from "./Bebida";
import Sobremesa from "./Sobremesa";

export default function Corpo() {
    return (
      <div class="corpo">
        <Prato />
        <Bebida />
        <Sobremesa />
      </div>
    )
}