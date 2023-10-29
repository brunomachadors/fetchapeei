import { styled } from 'styled-components';

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1080px) {
    flex-direction: column;
    height: 100%;
    justify-content: center;

    position: relative;
    margin-top: 115px;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1080px) {
    justify-content: space-around;
    height: 100%;
  }
`;
