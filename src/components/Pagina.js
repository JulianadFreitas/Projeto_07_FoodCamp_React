import Corpo from "./Corpo";
import BotaoFechamento from "./BotaoFechamento";
export default function Pagina() {
    return (
      <div class="pagina">
        <div class="topo">
          <div class="logo">FoodCamp<p>Sua comida em 6 minutos</p>
          </div>
        </div>
        <Corpo />
        <BotaoFechamento />
      </div>
    )
  }