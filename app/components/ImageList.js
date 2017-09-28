import React from 'react';
import styled from 'styled-components';

import Loader from './Loader';
import Image from './Image';

const ImageList = ({ images, isLoading }) => {
  return (
    <ImageListContainer>
      {isLoading && !images.length ? <Loader initial /> : null}
      {!isLoading &&
        images.map(image => <Image key={image.id} src={image.urls.raw} />)}
    </ImageListContainer>
  );
};

export default ImageList;

const ImageListContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
`;
