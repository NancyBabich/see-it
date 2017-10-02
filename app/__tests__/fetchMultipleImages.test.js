import expect from 'expect';

describe('fetchImages method in ImageListContainer', () => {
  it('Should fetch first n images', done => {
    const url = 'https://api.unsplash.com/search/photos';
    const category = 'cities';
    const perPage = 9;
    const request = new Request(
      `${url}/?query=${category}&page=1&per_page=${perPage}`,
      {
        method: 'GET',
        headers: new Headers({
          Authorization:
            'Client-ID e6265d8a013e80cb7c27328768e0aa508ce426d36e58106d377a5d137e421c59'
        })
      }
    );

    fetch(request)
      .then(res => res.json())
      .then(images => {
        expect(images.results.length).toBe(perPage);
      })
      .then(() => done(), done);
  });

  it('Should return no images for a non-existing category', done => {
    const url = 'https://api.unsplash.com/search/photos';
    const category = 'fjdjfa';
    const perPage = 9;
    const request = new Request(
      `${url}/?query=${category}&page=1&per_page=${perPage}`,
      {
        method: 'GET',
        headers: new Headers({
          Authorization:
            'Client-ID e6265d8a013e80cb7c27328768e0aa508ce426d36e58106d377a5d137e421c59'
        })
      }
    );
    fetch(request)
      .then(res => res.json())
      .then(images => {
        expect(images.results.length).toBe(0);
      })
      .then(() => done(), done);
  });
});
