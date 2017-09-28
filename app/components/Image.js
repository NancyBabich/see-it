import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { ifProp } from 'styled-tools';

import Colors from '../consts/colors';

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  handleImageLoad = () => {
    this.setState({
      isLoaded: true
    });
  };

  render() {
    return (
      <ImageContainer isLoaded={this.state.isLoaded}>
        <StyledImg
          isLoaded={this.state.isLoaded}
          onLoad={this.handleImageLoad}
          src={this.props.src}
        />
      </ImageContainer>
    );
  }
}

const pulse = keyframes`
    0% {
        background-color: ${Colors.lightGray};
    }

    50% {
        background-color: ${Colors.gray};
    }

    100% {
        background-color: ${Colors.lightGray};
    }
`;

const StyledImg = styled.img`
  width: 300px;
  height: auto;
  display: ${ifProp('isLoaded', 'block', 'none')};
  border: solid 1px ${Colors.gray};
  padding: 15px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: ${ifProp('isLoaded', 'auto', '300px')};
  margin: 20px 20px;
  animation: ${ifProp('isLoaded', 'none', `${pulse} 2s infinite`)};

  &:hover {
    cursor: pointer;
  }
`;
