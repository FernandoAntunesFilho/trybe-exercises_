const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

describe('Test of GitHub repositories', () => {
    test('if repositories exists', async done => {
        expect(await getRepos('https://api.github.com/users/tryber/repos')).toContain('challenge-bug-hunting-youtrybe-squad-1')
        done();
    });

    test('if another repositories exists', async done => {
        expect(await getRepos('https://api.github.com/users/tryber/repos')).toContain('hackatrybe-covid')
        done();
    });
});
