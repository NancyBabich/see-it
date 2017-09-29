import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Image from './Image';
import Loader from './Loader';
import SearchBar from './SearchBar';

const ImageList = ({ category, images, isLoading, setCategory, status }) => {
  return (
    <Container>
      <Header category={category} setCategory={setCategory} />
      <SearchBar setCategory={setCategory} />
      <ImageListContainer>
        {isLoading && !images.length ? <Loader initial /> : null}
        {!isLoading &&
          images.map(image => (
            <Image id={image.id} key={image.id} src={image.urls.raw} />
          ))}
        {!isLoading && !images.length && status === 200 ? (
          <div>
            We're sorry. We have no {category} images to show you today. Drop in
            later or try something simpler, for example "cats" or "space."
          </div>
        ) : null}
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
