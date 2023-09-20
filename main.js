const form = document.getElementById('form');
let mensagem = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let valorA = document.getElementById('a');
    let valorB = document.getElementById('b');
    

    if(valorB.value > valorA.value){
        mensagem.innerHTML = "Formulário Validado!! Pois Campo B é maior que Campo A."
    }else if(valorA.value == valorB.value){
        mensagem.innerHTML = "Valor inválido!! Pois ambos os Campos são iguais."
    }else{
        mensagem.innerHTML = "Valor inválido!! Pois Campo A é maior que Campo B."
    }
    
})

let limpa = document.getElementById('clear');
limpa.onclick = function () {
    mensagem.innerHTML = '';
}


