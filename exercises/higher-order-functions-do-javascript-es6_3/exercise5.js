    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  const aLeters = names.reduce((contaA, valorAtual) => {
      const valorAtualMaiusculo = valorAtual.toUpperCase();
      contaA = contaA + (valorAtualMaiusculo.split("A").length -1);
      return contaA;
  }, 0)

  return aLeters;
}

assert.deepEqual(containsA(), 20);
