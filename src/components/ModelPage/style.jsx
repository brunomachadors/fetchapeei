import { styled } from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 1080px) {
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const GalleryPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1080px) {
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const GalleryButton = styled.button`
  background-color: #685044;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin: 0 10px;
  border-radius: 4px;
  width: 90px;
  transition: background-color 0.3s;
`;
