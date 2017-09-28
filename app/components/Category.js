import React, { Component } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  handleClick = () => this.props.setCategory(this.props.option);

  render() {
    const isActive = this.props.option === this.props.category;
    return (
      <StyledSpan onClick={this.handleClick} isActive={isActive}>
        {this.props.option}
      </StyledSpan>
    );
  }
}

const StyledSpan = styled.span`
  font-weight: ${ifProp('isActive', '700', 'normal')};

  &:hover {
    cursor: pointer;
  }
`;
