import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  width: 70%;
  height: 70%;
  gap: 50px;
`;

export const GalleryImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GalleryImage = styled.img`
  width: 70%;
  height: 70%;
  object-fit: cover;
  position: relative;
`;
