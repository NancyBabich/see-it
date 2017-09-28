import React, { Component } from 'react';

import ImageList from '../components/ImageList';

export default class ImagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isLoading: true,
      page: null,
      totalPages: null
    };
  }

  componentDidMount() {
    this.distributeEventListeners('add');
    this.fetchImages(1);
  }

  componentWillUnmount() {
    this.distributeEventListeners('remove');
  }

  distributeEventListeners = action => {
    action === 'add'
      ? window.addEventListener('scroll', this.handleScroll, false)
      : window.removeEventListener('scroll', this.handleScroll, false);
  };

  fetchImages = page => {
    const url = 'https://api.unsplash.com/search/photos';
    const perPage = 10;
    const request = new Request(
      `${url}/?query=dog&page=${page}&per_page=${perPage}`,
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
      .then(res => {
        page === 1
          ? this.setState({
              images: res.results,
              page,
              totalPages: res.total_pages,
              isLoading: false
            })
          : this.setState(prevState => ({
              images: [...prevState.images, ...res.results],
              page,
              totalPages: res.total_pages,
              isLoading: false
            }));
      })
      .catch(err => console.log(err));
  };

  handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      this.state.images.length &&
      !this.state.isLoading
    ) {
      this.fetchImages(this.state.page + 1);
    }
  };

  render() {
    return (
      <ImageList images={this.state.images} isLoading={this.state.isLoading} />
    );
  }
}
