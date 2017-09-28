import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ifProp } from 'styled-tools';

//import Colors from '../consts/colors';

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
  position: absolute;
  left: 50%;
  top: ${ifProp('initial', '50%', 'auto')};
  bottom: ${ifProp('initial', 'auto', '10px')};
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.25);
  border-top: 5px solid red;
  border-radius: 50%;
  animation: ${rotate} 0.75s infinite ease;
`;
