import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 200px;
  width: 70%;
  height: 70%;
  gap: 20px;
`;

export const GalleryRow = styled.div`
  padding: 10px;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;
