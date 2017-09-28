import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Image from './Image';
import Loader from './Loader';

const ImageList = ({ category, images, isLoading, setCategory }) => {
  return (
    <Container>
      <Header category={category} setCategory={setCategory} />
      <ImageListContainer>
        {isLoading && !images.length ? <Loader initial /> : null}
        {!isLoading &&
          images.map(image => <Image key={image.id} src={image.urls.raw} />)}
      </ImageListContainer>
    </Container>
  );
};

export default ImageList;

const Container = styled.div`width: 100%;`;

const ImageListContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
`;
