import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';
import SearchBar from './SearchBar';

const Header = ({ setCategory }) => (
  <HeaderContainer>
    See it <SearchBar setCategory={setCategory} />
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 200px;
  padding: 20px 0;
  background-color: ${Colors.white};
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
`;
