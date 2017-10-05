import React from 'react';
import { ShareButtons } from 'react-share';
import styled from 'styled-components';

import Colors from '../../consts/colors';

const SocialButtons = ({ src }) => (
  <SocialButtonsContainer>
    <StyledFacebookShareButton url={src} picture={src}>
      Share on Facebook
    </StyledFacebookShareButton>
    <StyledTwitterShareButton url={src}>
      Share on Twitter
    </StyledTwitterShareButton>
  </SocialButtonsContainer>
);

export default SocialButtons;

const SocialButtonsContainer = styled.div`width: 100%;`;

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
