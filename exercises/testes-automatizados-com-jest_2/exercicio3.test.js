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

  describe('Search users', () => {
    test('if user exists', async (done) => {
      const resolve = await getUserName(5);
      expect(resolve).toBe('Paul');
      done();
    });

    test('if DONT user exists', async (done) => {
      try {
        await getUserName(10);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 10 not found.' });  
      }
      done();
    });
  });