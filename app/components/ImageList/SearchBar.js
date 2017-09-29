import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';

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
    const { setCategory } = this.props;
    const { input } = this.state;
    e.preventDefault();
    setCategory(input);
  };

  render() {
    const { value } = this.state;
    return (
      <SearchBarContainer>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={value}
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

const Input = styled.input`
  width: 20rem;
  height: 2rem;
  border: 1px solid ${Colors.darkGray};
  text-align: center;

  @media screen and (max-width: 365px) {
    width: 15rem;
  }
`;

const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  display: block;
  margin-top: 10px;
  width: 20rem;
  height: 2rem;
  background-color: ${Colors.white};
  border: solid 1px ${Colors.darkGray};
  outline: none;
  color: ${Colors.darkGray};

  &:hover {
    cursor: pointer;
    color: ${Colors.gray};
    border: solid 1px ${Colors.gray};
  }

  @media screen and (max-width: 365px) {
    width: 15rem;
  }
`;
