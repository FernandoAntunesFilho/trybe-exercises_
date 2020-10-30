const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  };

  test('uppercase "fernando" to equal "FERNANDO"', (done) => {
      uppercase('fernando', (str) => {
          expect(str).toBe('FERNANDO');
          done();
      });
  });