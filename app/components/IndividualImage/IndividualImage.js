import React from 'react';
import { ShareButtons } from 'react-share';
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
}) => {
  const { FacebookShareButton, TwitterShareButton } = ShareButtons;

  return (
    <StyledContainer>
      {isLoading && <Loader initial />}
      {!isLoading && src ? (
        <StyledContainer>
          <Image src={src} />
          <StyledDiv>By {author}</StyledDiv>
          <StyledDiv>
            Original size: {width} x {height}px
          </StyledDiv>
          <StyledDiv>{likes ? likes : 0} likes</StyledDiv>
          <StyledFacebookShareButton url={src} picture={src}>
            Share on Facebook
          </StyledFacebookShareButton>
          <StyledTwitterShareButton url={src}>
            Share on Twitter
          </StyledTwitterShareButton>
        </StyledContainer>
      ) : null}
    </StyledContainer>
  );
};

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
const StyledDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledFacebookShareButton = styled(ShareButtons.FacebookShareButton)`
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

  @media screen and (max-width: 325px) {
    width: 250px;
  }
`;

const StyledTwitterShareButton = styled(ShareButtons.TwitterShareButton)`
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

  @media screen and (max-width: 325px) {
    width: 250px;
  }
`;
