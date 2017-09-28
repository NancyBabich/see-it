import React from 'react';
import styled from 'styled-components';

import Loader from './Loader';
import Image from './Image';

const ImageList = ({ images, isLoading }) => {
  return (
    <ImageListContainer>
      {isLoading && !images.length ? <Loader initial /> : null}
      {!isLoading && (
        <div>
          {images.map(image => <Image key={image.id} src={image.urls.raw} />)}
        </div>
      )}
    </ImageListContainer>
  );
};

export default ImageList;

const ImageListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
