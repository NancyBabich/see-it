import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Loader from './Loader';
import Image from './Image';

const ImageList = ({ images }) => (
  <ImageListContainer>
    {!images && <Loader initial />}
    {images &&
      images.map(image => <Image key={image.id} src={image.urls.raw} />)}
  </ImageListContainer>
);

export default ImageList;

const ImageListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
