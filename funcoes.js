function multiplica(num1, num2) {
  let resultado = (num1 * num2);
  document.querySelector('.conta').innerHTML += `O resultado da muitliplicação entre ${num1} e ${num2} é: ${resultado} <br>`;      
}; 

multiplica(2, 4);
multiplica(3, 4);
multiplica(4, 4);

function menorValor(num1, num2, num3) {
  let menor = 0;
  if(num1 < num2 && num1 < num3){
    menor = num1;
  } else if (num2 < num1 && num2 < num3) {
    menor = num2;
  }
    menor = num3;
    document.querySelector('.menorValor').innerHTML = `O menor valor entre os números ${num1}, ${num2} e ${num3} é: ${menor} <br>`;
  }
  menorValor(5,4,3);


function concatenaStrings () {
  let string1 = prompt('digite a primeira parte da frase');
  let string2 = prompt('digite a segunda parte da frase');
  let string3 = prompt('digite a terceira parte da frase');
  let stringConcatenada = string1.concat(' ',string2, ' ', string3);
  document.querySelector('.stringConcatenada').innerHTML = stringConcatenada + '<br>';
}
concatenaStrings();

