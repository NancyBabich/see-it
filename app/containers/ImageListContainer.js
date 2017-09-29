import React, { Component } from 'react';
import { throttle } from 'lodash';

import ImageList from '../components/ImageList/ImageList';

export default class ImagesContainer extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = throttle(this.handleScroll, 300);
    this.state = {
      category: 'cities',
      images: [],
      isAllDisplayed: false,
      isLoading: true,
      page: null,
      status: null,
      totalPages: null
    };
  }

  componentDidMount() {
    this.distributeEventListeners('add');
    this.fetchImages(this.state.category, 1);
  }

  componentWillUnmount() {
    this.distributeEventListeners('remove');
  }

  distributeEventListeners = action => {
    action === 'add'
      ? window.addEventListener('scroll', this.handleScroll, false)
      : window.removeEventListener('scroll', this.handleScroll, false);
  };

  fetchImages = (category, page) => {
    if (!this.state.isAllDisplayed) {
      const url = 'https://api.unsplash.com/search/photos';
      const perPage = 9;
      const request = new Request(
        `${url}/?query=${category}&page=${page}&per_page=${perPage}`,
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
          this.setState({ status: res.status });
          return res.json();
        })
        .then(res => {
          const isAllDisplayed = res.total_pages === page;
          page === 1
            ? this.setState({
                images: res.results,
                page,
                totalPages: res.total_pages,
                isLoading: false,
                isAllDisplayed
              })
            : this.setState(prevState => ({
                images: [...prevState.images, ...res.results],
                page,
                totalPages: res.total_pages,
                isLoading: false,
                isAllDisplayed
              }));
        })
        .catch(err => console.log(err));
    }
  };

  handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      this.state.images.length &&
      !this.state.isLoading
    ) {
      this.fetchImages(this.state.category, this.state.page + 1);
    }
  };

  setCategory = category => {
    this.setState({ images: [], category, isLoading: true });
    this.fetchImages(category, 1);
  };

  render() {
    return (
      <ImageList
        category={this.state.category}
        handleQuery={this.handleQuery}
        images={this.state.images}
        isLoading={this.state.isLoading}
        setCategory={this.setCategory}
        status={this.state.status}
      />
    );
  }
}
