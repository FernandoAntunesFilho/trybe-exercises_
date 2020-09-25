window.onload = function(){
    const botao = document.getElementById('botao-click');
    const painel = document.getElementById('display-count');
    let clickCount = 0;

    painel.innerText = clickCount;

    botao.addEventListener('click', function(){
        painel.innerText = clickCount += 1;
    })
}