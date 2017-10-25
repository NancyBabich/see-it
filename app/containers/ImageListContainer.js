import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { throttle } from 'lodash';

import axiosConfig from '../consts/axiosConfig';
import fetchRequest from '../helpers/fetchRequest';
import ImageList from '../components/ImageList/ImageList';
import { setSearchCategory } from '../actions/index';

class ImageListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = throttle(this.handleScroll, 300);
    this.state = {
      images: [],
      isAllDisplayed: false,
      isLoading: true,
      page: null,
      status: null,
      totalPages: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.distributeEventListeners('add');
    this.fetchImages(this.props.category, 1);
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
      const root = 'https://api.unsplash.com/search/photos';
      const perPage = 15;
      const url = `${root}/?query=${category}&page=${page}&per_page=${perPage}`;

      axios
        .get(url, axiosConfig)
        .then(res => {
          const isAllDisplayed = res.data.total_pages === page;
          page === 1
            ? this.setState({
                images: res.data.results,
                page,
                totalPages: res.data.total_pages,
                isLoading: false,
                isAllDisplayed,
                status: res.status
              })
            : this.setState(prevState => ({
                images: [...prevState.images, ...res.data.results],
                page,
                totalPages: res.data.total_pages,
                isLoading: false,
                isAllDisplayed,
                status: res.status
              }));
        })
        .catch(err => console.log(err));
    }
  };

  handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      this.state.images.length &&
      !this.state.isLoading
    ) {
      this.fetchImages(this.props.category, this.state.page + 1);
    }
  };

  setCategory = category => {
    this.props.dispatch(setSearchCategory(category));
    this.setState({ images: [], isLoading: true });
    this.fetchImages(category, 1);
  };

  render() {
    const { images, isLoading, status } = this.state;
    const { category } = this.props;

    return (
      <ImageList
        category={category}
        handleQuery={this.handleQuery}
        images={images}
        isLoading={isLoading}
        setCategory={this.setCategory}
        status={status}
      />
    );
  }
}

export default connect(state => {
  return {
    category: state.category
  };
})(ImageListContainer);
