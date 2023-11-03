import styled from 'styled-components';

export const GalleryModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GalleryModalContent = styled.div`
  background: transparent;
  padding: 10px;
  padding-right: 250px;
  max-width: 60%;
  max-height: 60%;
  overflow: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GalleryImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  background: transparent;
  display: flex;
`;
