import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ifProp } from 'styled-tools';

import Colors from '../consts/colors';

const Loader = ({ initial }) => <Spinner initial={initial} />;

export default Loader;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: ${ifProp('initial', '-200px auto 0 auto', '200px auto 0 auto')};
  width: 50px;
  height: 50px;
  border: 5px solid ${Colors.gray};
  border-top: 5px solid ${Colors.lightGray};
  border-radius: 50%;
  animation: ${rotate} 0.75s infinite ease;
`;
