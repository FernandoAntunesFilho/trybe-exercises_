const { TestScheduler } = require("jest");

const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

  test('if user exists', () => {
      return getUserName(4).then(user => {
          expect(user).toBe('Mark');
      });
  });

  test('if user DONT exists', () => {
    return getUserName(8).catch(error => {
        expect(error).toEqual({ error: 'User with 8 not found.' });
    });
});