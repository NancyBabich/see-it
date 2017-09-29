import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { ifProp } from 'styled-tools';

import Colors from '../../consts/colors';

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
    const { id, src } = this.props;
    const { isLoaded } = this.state;

    return (
      <Link
        to={{
          pathname: `/photos/${id}`
        }}
      >
        <ImageContainer isLoaded={isLoaded} id={id}>
          <StyledImg
            isLoaded={isLoaded}
            onLoad={this.handleImageLoad}
            src={src}
          />
        </ImageContainer>
      </Link>
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

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: ${ifProp('isLoaded', 'auto', '300px')};
  margin: 20px 20px;
  animation: ${ifProp('isLoaded', 'none', `${pulse} 2s infinite ease`)};

  &:hover {
    cursor: pointer;
  }
`;

const StyledImg = styled.img`
  width: 300px;
  height: auto;
  display: ${ifProp('isLoaded', 'block', 'none')};
  border: solid 1px ${Colors.gray};
  padding: 15px;
`;
