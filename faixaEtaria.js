(function imprimeIdade() {
  let idade = prompt('Digite sua idade:')

  if (idade >= 0 && idade < 15) {
      faixaEtaria = 'criança';
  } else if (idade < 30) {
      faixaEtaria = 'jovem';
  } else if (idade < 60) {
      faixaEtaria = 'adulto';  
  } else if (idade >= 60) {
      faixaEtaria = 'idoso';  
  } else {
    document.querySelector('.idade').innerHTML = `Não é um número!`;
  }
  document.querySelector('.idade').innerHTML = `Você é ${faixaEtaria}.`; 
})();



