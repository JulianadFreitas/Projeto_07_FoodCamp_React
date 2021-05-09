function botaoverde() {
    tela.classList.remove('escondido');
    drink = document.querySelector(".segunda .selecionado .titulo").innerHTML;
    doce = document.querySelector(".terceira .selecionado .titulo").innerHTML;
    precocomida = (document.querySelector(".primeira .selecionado .preco").innerHTML).replace(',', '.').replace('R$', '')
    precobebida = (document.querySelector(".segunda .selecionado .preco").innerHTML).replace(',', '.').replace('R$', '')
    precosobremesa = (document.querySelector(".terceira .selecionado .preco").innerHTML).replace(',', '.').replace('R$', '')
    precototal = parseFloat(precocomida) + parseFloat(precobebida) + parseFloat(precosobremesa);

    const total = document.querySelector(".mascara .caixa-confirmacao .descricao .total");
    total.innerHTML = precototal.toFixed(2).replace('.', ',').replace('', 'R$ ');

    const telaprecoprato = document.querySelector(".mascara .caixa-confirmacao .descricao .valorp");
    telaprecoprato.innerHTML = precocomida.replace('.', ',').replace('', 'R$');

    const telaprecobebida = document.querySelector(".mascara .caixa-confirmacao .descricao .valorb");
    telaprecobebida.innerHTML = precobebida.replace('.', ',').replace('', 'R$');

    const telaprecosobremesa = document.querySelector(".mascara .caixa-confirmacao .descricao .valors");
    telaprecosobremesa.innerHTML = precosobremesa.replace('.', ',').replace('', 'R$');

    const telanomeprato = document.querySelector(".mascara .caixa-confirmacao .descricao .pratoselecionado");
    telanomeprato.innerHTML = pratoSelecionado;

    const telanomebebida = document.querySelector(".mascara .caixa-confirmacao .descricao .bebidaselecionada");
    telanomebebida.innerHTML = bebidaSelecionada;

    const telanomesobremesa = document.querySelector(".mascara .caixa-confirmacao .descricao .sobremesaselecionada");
    telanomesobremesa.innerHTML = sobremesaSelecionada;
}

function wpp() {

    const texto = `Olá, gostaria de fazer o pedido:\n
        - Prato: ${prato}\n
        - Bebida: ${drink}\n
        - Sobremesa: ${doce}\n
          Total:  R$ ${precototal.toFixed(2).replace('.',',')}\n
        - Endereço: ${endereco}\n
        - Nome: ${nome}`;
    const textoEncode = encodeURI(texto);
    const link = `https://wa.me/5581993089298?text=${textoEncode}`
    window.location.href = `https://wa.me/5581993089298?text= + ${textoEncode}`;
}

