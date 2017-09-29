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
    this.fbAsyncInit();
    this.fetchImage(this.props.match.params.imageId);
  }

  fbAsyncInit = () => {
    window.fbAsyncInit = function() {
      FB.init({
        appId: 266524790526468,
        xfbml: true,
        version: 'v2.1'
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  };

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
          src: image.urls.raw,
          width: image.width,
          height: image.height,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
  };

  shareOnFacebook = src => {
    FB.ui(
      {
        method: 'share',
        display: 'popup',
        href: src
      },
      function(response) {}
    );
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
        shareOnFacebook={this.shareOnFacebook}
        width={width}
      />
    );
  }
}
