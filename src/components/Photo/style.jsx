import styled from 'styled-components';

export const SinglePhoto = styled.img`
  width: auto;
  height: 60%;

  @media (max-width: 1080px) {
    height: 30%;
  }

  @media (max-width: 720px) {
    height: 30%;
  }
`;
