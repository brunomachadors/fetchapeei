import styled from 'styled-components';

export const Bar = styled.div`
  background-color: rgba(38, 38, 38, 1);
  width: 17.6%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media (max-width: 1080px) {
    height: 25%;
    width: 100%;
  }
`;

export const Title = styled.h1``;

export const Description = styled.p``;

export const AdditionalInfo = styled.p``;
