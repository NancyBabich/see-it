import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

const Category = ({ category, option, setCategory }) => {
  const isActive = option === category;

  return (
    <StyledSpan onClick={() => setCategory(option)} isActive={isActive}>
      {option}
    </StyledSpan>
  );
};

export default Category;

const StyledSpan = styled.span`
  font-weight: ${ifProp('isActive', '700', 'normal')};

  &:hover {
    cursor: pointer;
  }
`;
