import React from 'react';
import styled from 'styled-components';

const ImageDetails = ({ author, height, likes, width }) => (
  <ImageDetailsContainer>
    <StyledDiv>By {author}</StyledDiv>
    <StyledDiv>
      Original size: {width} x {height}px
    </StyledDiv>
    <StyledDiv>
      {likes ? likes : 'No'} likes{!likes && ' yet.'}
    </StyledDiv>
  </ImageDetailsContainer>
);

export default ImageDetails;

const ImageDetailsContainer = styled.div`width: 100%;`;

const StyledDiv = styled.div`
  width: 100%;
  text-align: center;
`;
