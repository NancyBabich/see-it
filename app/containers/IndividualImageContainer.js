import React, { Component } from 'react';

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
        this.setState({
          author: image.user.first_name,
          likes: image.likes,
          src: image.urls.regular,
          width: image.width,
          height: image.height,
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
