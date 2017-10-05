import React from 'react';
import styled from 'styled-components';

import ImageDetails from './ImageDetails';
import Loader from '../Loader';
import SocialButtons from './SocialButtons';

const IndividualImage = ({ author, height, src, width, isLoading, likes }) => (
  <StyledContainer>
    {isLoading && <Loader initial />}
    {!isLoading && src ? (
      <StyledContainer>
        <Image src={src} />
        <ImageDetails
          author={author}
          height={height}
          likes={likes}
          width={width}
        />
        <SocialButtons src={src} />
      </StyledContainer>
    ) : null}
  </StyledContainer>
);

export default IndividualImage;

const Image = styled.img`
  display: block;
  width: 500px;
  margin: 50px auto 25px auto;

  @media screen and (max-width: 550px) {
    width: 450px;
  }

  @media screen and (max-width: 475px) {
    width: 400px;
  }

  @media screen and (max-width: 425px) {
    width: 325px;
  }

  @media screen and (max-width: 350px) {
    width: 250px;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;

  @media screen and (max-width: 475px) {
    font-size: 0.75rem;
  }
`;
