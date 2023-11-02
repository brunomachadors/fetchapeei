import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  width: 60%;
  height: 60%;
  margin-top: 100px;
  gap: 10px;
`;

export const GalleryRow = styled.div`
  padding: 10px;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
