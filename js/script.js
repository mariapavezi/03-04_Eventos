const botao = document.getElementById('meuBotao');

const resposta = document.getElementById('resposta');

const evento = document.getElementById('evento');

botao.addEventListener('click',
    imprimir
);
/*callback*/
botao.addEventListener('mouseover', 
    function () {
        /*evento.innerHTML = alert("Voce foi invadido.")*/
        evento.innerHTML = `<h1>voce foi invadido;</h1>`
    }
);

botao.addEventListener('mouseout',
    function () {
        evento.innerHTML = alert("Não tente fugir")
    }
);

function imprimir() {
    resposta.innerText = "você clicou em mim.";
}