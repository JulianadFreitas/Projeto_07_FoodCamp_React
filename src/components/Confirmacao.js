export default function Confirmacao() {
    return (
        <div class="mascara escondido">
        <div class="caixa-confirmacao">
          <p class="bold"> Confirme seu pedido</p>
          <div class="descricao">
            <div class="alinhamento"><span class="pratoselecionado">pratox</span><span class="valorp">valorprato</span>
            </div>
            <div class="alinhamento"><span class="bebidaselecionada">bebidax</span><span class="valorb">valorbebida</span>
            </div>
            <div class="alinhamento"><span class="sobremesaselecionada">sobremesax</span><span
                class="valors">valorsobremesa</span></div>
            <div class="alinhamento"><span class="bold">TOTAL</span><span class="total">valor</span></div>
          </div>
          <div class="tudocerto" onclick="wpp()"> Tudo certo, pode pedir!
          </div>
          <button class="cancelar" onclick="cancelar()">Cancelar</button>
        </div>
      </div>
    )
  }