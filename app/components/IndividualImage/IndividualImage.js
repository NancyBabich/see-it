import React from 'react';
import styled from 'styled-components';

import Loader from '../Loader';

const IndividualImage = ({
  author,
  height,
  src,
  width,
  isLoading,
  likes,
  shareOnFacebook
}) => (
  <StyledContainer>
    {isLoading && <Loader initial />}
    {!isLoading && src ? (
      <StyledContainer>
        <Image src={src} />
        <StyledDiv>By {author}</StyledDiv>
        <StyledDiv>
          Original size: {width} x {height}px
        </StyledDiv>
        <StyledDiv>Likes: {likes}</StyledDiv>
        <StyledDiv>
          Share the image on{' '}
          <ShareButton onClick={() => shareOnFacebook(src)}>
            Facebook
          </ShareButton>{' '}
        </StyledDiv>
      </StyledContainer>
    ) : null}
  </StyledContainer>
);

export default IndividualImage;

const Image = styled.img`
  display: block;
  width: 500px;
  margin: 50px auto 10px auto;
`;

const ShareButton = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;
const StyledDiv = styled.div`
  width: 100%;
  text-align: center;
`;
