import React from 'react';
import styled from 'styled-components';

import Category from './Category';

const Header = ({ category, setCategory }) => (
  <HeaderContainer>
    Show me{' '}
    <Category category={category} option="city" setCategory={setCategory} />,{' '}
    <Category
      category={category}
      option="dogs"
      setCategory={setCategory}
    />{' '}
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  text-align: center;
`;
