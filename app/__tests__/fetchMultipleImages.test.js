import expect from 'expect';
import axios from 'axios';

import axiosConfig from '../consts/axiosConfig';

describe('fetchImages method in ImageListContainer', () => {
  const root = 'https://api.unsplash.com/search/photos';
  const perPage = 9;

  let category;
  let url;

  it('Should fetch first n images', done => {
    category = 'cities';
    url = `${root}/?query=${category}&page=1&per_page=${perPage}`;

    axios
      .get(url, axiosConfig)
      .then(res => {
        expect(res.data.results.length).toBe(perPage);
      })
      .then(() => done(), done);
  });

  it('Should return no images for a non-existing category', done => {
    category = 'kjlsdk';
    url = `${root}/?query=${category}&page=1&per_page=${perPage}`;

    axios
      .get(url, axiosConfig)
      .then(res => {
        console.log(url);
        expect(res.data.results.length).toBe(0);
      })
      .then(() => done(), done);
  });
});
