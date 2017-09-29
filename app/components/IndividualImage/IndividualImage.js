import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';
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
        <ShareButton onClick={() => shareOnFacebook(src)}>
          Share the image on Facebook
        </ShareButton>
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

const ShareButton = styled.div`
  border: solid 1px ${Colors.darkGray};
  padding: 10px 5px 10px 5px;
  margin: 20px auto;
  width: 300px;
  text-align: center;

  &:hover {
    cursor: pointer;
    border: solid 1px ${Colors.gray};
    color: ${Colors.gray};
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
