import expect from 'expect';

describe('fetchImage method in IndividualImageContainer', () => {
  it('Should fetch image with specific id', done => {
    const id = 'SLxbEMVNeqI';
    const url = `https://api.unsplash.com/photos/${id}`;
    const request = new Request(`${url}/`, {
      method: 'GET',
      headers: new Headers({
        Authorization:
          'Client-ID e6265d8a013e80cb7c27328768e0aa508ce426d36e58106d377a5d137e421c59'
      })
    });

    fetch(request)
      .then(res => res.json())
      .then(image => {
        expect(image.id).toBe(id);
      })
      .then(() => done(), done);
  });
});
