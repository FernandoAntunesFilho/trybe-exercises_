  const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];

  const findAnimalByName = async (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const objAnimals = Animals.find(animal => animal.name === name);
            if (objAnimals) {
              return resolve(objAnimals);
            }
            return reject('Nenhum animal com esse nome!')
        }, 100);
    })
  };

  const findAnimalByAge = async (age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const arrayAnimals = Animals.filter(animal => animal.age === age);
            if (arrayAnimals.length > 0) {
              return resolve(arrayAnimals);
            }
            return reject('Nenhum animal com essa idade!')
        }, 100);
    })
  };
  
  const getAnimal = name => findAnimalByName(name).then(obj => obj);
  const getAnimalAge = age => findAnimalByAge(age).then(list => list);

  // 2. Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.
  // ---------------------
  
  describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });
  });

  describe('Testando promise - findAnimalByAge', () => {
    describe('Quando existe o animal com a idade procurada', () => {
      test('Retorne o array dos animais', () => {
        expect.assertions(1);
        return getAnimalAge(5).then(animal => {
          expect(animal).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
        });
      });
    });

    describe('Quando não existe o animal com a idade procurada', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimalAge(10).catch(error =>
          expect(error).toEqual('Nenhum animal com essa idade!')
        );
      });
    });
  });