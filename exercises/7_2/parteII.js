const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addKey(objeto, chave, valor){
    objeto[chave] = valor;
}

addKey(lesson2, 'turno', 'manhã');

console.log('LESSON 1');
console.table(lesson1);
console.log('');
console.log('LESSON 2');
console.table(lesson2);
console.log('');
console.log('LESSON 3');
console.table(lesson3);