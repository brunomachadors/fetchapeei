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
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GalleryImage = styled.img`
  max-width: 60%;
  max-height: 80%;
  background: transparent;
  display: flex;
  min-width: 700px;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: -1;
`;
