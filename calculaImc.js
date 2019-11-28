(function calculaImc() {
   let nome = prompt('Digite seu nome:');
   let alturaCentimetros = parseFloat(prompt('Digite sua altura em centímetros:'));
   let peso = parseFloat(prompt('Digite seu peso:'));
   let altura = alturaCentimetros/100;
  
   let imcFloat = peso / (altura * altura);
   let imc = imcFloat.toFixed(2);

   if (imc < 16) {
       classificacao = 'baixo peso muito grave';
   } else if (imc < 17) {
      classificacao = 'baixo peso grave';
   } else if (imc < 18.50) {
      classificacao = 'baixo peso'; 
   } else if (imc < 25) {
      classificacao = 'peso ideal';
   } else if (imc < 30) {
      classificacao = 'sobrepeso';
   } else if (imc < 35) {
      classificacao = 'obesidade grau I';
   } else if (imc <= 40) {
      classificacao = 'obesidade grau II';
   } else {
      classificacao = 'obesidade grau III';
   }

   mensagem = `${nome} possui índice de massa corporal igual a ${imc}, sendo classificado como ${classificacao}.`;
   document.querySelector('.calculo').innerHTML = `${mensagem}`; 
 })();