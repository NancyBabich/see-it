import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';
import Header from './Header';
import Image from './Image';
import Loader from '../Loader';

const ImageList = ({ category, images, isLoading, setCategory, status }) => {
  return (
    <Container>
      <Header setCategory={setCategory} />
      <ImageListContainer>
        {isLoading && !images.length ? <Loader initial /> : null}
        {!isLoading &&
          images.map((image, i) => (
            <Image id={image.id} key={i} src={image.urls.raw} />
          ))}
        {!isLoading && !images.length && status === 200 ? (
          <MessageContainer>
            <p>We're sorry. We have no {category} images to show you today.</p>
            <p>
              Drop in later or try something simpler, for example "cats" or
              "space."
            </p>
          </MessageContainer>
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
  min-height: 101vh;
  margin-top: 200px;
`;

const MessageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 150px;
  text-align: center;
  background-color: ${Colors.darkGray};
  color: ${Colors.lightGray};
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.5;
`;
