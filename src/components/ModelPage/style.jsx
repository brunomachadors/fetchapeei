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
