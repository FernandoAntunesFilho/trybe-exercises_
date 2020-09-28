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

function listKeys(objeto){    
    console.log(Object.keys(objeto));
}

function listValues(objeto){    
    console.log(Object.values(objeto));
}

function objectLength(objeto){
    console.log(Object.keys(objeto).length);
}

function countStudents(){
    console.log(allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes);
}

function getValueByNumber(object, position){
    console.log(Object.values(object)[position]);
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
console.log('');

console.log('LISTA DE CHAVES DO OBJETO');
listKeys(lesson1);

console.log('');
console.log('TAMANHO DO OBJETO');
objectLength(lesson1);

console.log('');
console.log('LISTA DE VALORES DO OBJETO');
listValues(lesson2);

const lesson1Clone = Object.assign({}, lesson1);
const lesson2Clone = Object.assign({}, lesson2);
const lesson3Clone = Object.assign({}, lesson3);
const allLessons = {
    lesson1: lesson1Clone,
    lesson2: lesson2Clone,
    lesson3: lesson3Clone,
}

console.log('');
console.log('OBJETO COM TODOS OS OBJETOS LESSON');
console.log(allLessons);

console.log('');
console.log('TOTAL DE TODOS OS ALUNOS');
countStudents();

console.log('');
console.log('RETORNA VALOR COM BASE NA POSIÇÃO');
getValueByNumber(lesson2, 2);