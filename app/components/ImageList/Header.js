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
  border-bottom: 2px solid ${Colors.lightGray};
  //box-shadow: 0px 2px 5px 0px rgba(50, 50, 50, 0.47);
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
`;
