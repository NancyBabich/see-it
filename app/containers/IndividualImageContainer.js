import React, { Component } from 'react';
import axios from 'axios';

import axiosConfig from '../consts/axiosConfig';
import IndividualImage from '../components/IndividualImage/IndividualImage';

export default class IndividualImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      isLoading: true,
      likes: null,
      src: '',
      width: null,
      height: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchImage(this.props.match.params.imageId);
  }

  fetchImage = id => {
    const url = `https://api.unsplash.com/photos/${id}`;

    axios
      .get(url, axiosConfig)
      .then(res => {
        this.setState({
          author: res.data.user.first_name,
          likes: res.data.likes,
          src: res.data.urls.regular,
          width: res.data.width,
          height: res.data.height,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { author, height, src, width, isLoading, likes } = this.state;
    return (
      <IndividualImage
        author={author}
        height={height}
        isLoading={isLoading}
        likes={likes}
        src={src}
        width={width}
      />
    );
  }
}
