import expect from 'expect';
import axios from 'axios';

import axiosConfig from '../consts/axiosConfig';

describe('fetchImage method in IndividualImageContainer', () => {
  it('Should fetch image with specific id', done => {
    const id = 'SLxbEMVNeqI';
    const url = `https://api.unsplash.com/photos/${id}`;

    axios
      .get(url, axiosConfig)
      .then(res => {
        expect(res.data.id).toBe(id);
      })
      .then(() => done(), done);
  });
});
