import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import ImageList from '../components/ImageList';

export default class ImagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null
    };
  }

  componentDidMount() {
    const url = 'https://api.unsplash.com/search/photos';
    const perPage = 10;
    const request = new Request(
      `${url}/?query=dog&page=1&per_page=${perPage}`,
      {
        method: 'GET',
        headers: new Headers({
          Authorization:
            'Client-ID e6265d8a013e80cb7c27328768e0aa508ce426d36e58106d377a5d137e421c59'
        })
      }
    );

    fetch(request)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ images: res.results });
      });
  }

  render() {
    return <ImageList images={this.state.images} />;
  }
}
