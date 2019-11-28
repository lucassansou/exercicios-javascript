var amigo = {
    nome: 'Mariana',
    sobrenome: 'Franco',
    idade: 29,
    altura: 1.70,
    // nascimento: 1990-02-20,
    signo: "Peixes",

    dormir: function () {
        console.log('Trocando de roupa...');
        console.log('Preparando a cama...');
        console.log('Contando carneirinhos...');
        console.log('ZZzzzzzZZzzzZZZZZzzzzz...');
    },

    soma: function (num1, num2) {
        calculo = num1 + num2;
        console.log(calculo);
    },

}

console.log('O signo de ' + amigo.nome + ' é ' + amigo.signo);