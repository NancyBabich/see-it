import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from '../consts/colors';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setCategory(this.state.input);
  };

  render() {
    return (
      <SearchBarContainer>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.value}
            type="text"
            placeholder="Search for photos"
            onChange={this.handleChange}
          />
          <StyledButton type="submit">search</StyledButton>
        </form>
      </SearchBarContainer>
    );
  }
}

const Input = styled.input`width: 20rem;`;

const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  display: block;
  margin-top: 10px;
  width: 20rem;
  background-color: ${Colors.white};
  border: solid 1px ${Colors.gray};
  outline: none;
  color: ${Colors.darkGray};

  &:hover {
    cursor: pointer;
    background-color: ${Colors.lightGray};
  }
`;
