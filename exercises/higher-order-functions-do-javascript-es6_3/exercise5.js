    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  const aLeters = names.reduce((contaA, valorAtual) => {
      contaA = contaA + valorAtual.split('a').length;
      return contaA;
  }, 0)

  return aLeters;
}

// assert.deepEqual(containsA(), 20);

console.log(containsA());