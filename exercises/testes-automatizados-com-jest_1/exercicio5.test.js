
const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };
  
  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };
  
  const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
  };

  describe('Test block exercise 5', () => {
      test('compare obj1 and obj2 - results true', () => {
          expect(obj1).toEqual(obj2);
      });
      test('compare obj2 and obj3 - results false', () => {
        expect(obj2).not.toEqual(obj3);
      });
      test('compare obj3 and obj1 - results false', () => {
        expect(obj3).not.toEqual(obj1);
      });
  });