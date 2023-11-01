import { styled } from 'styled-components';

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1080px) {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    height: 70%;
    margin-top: 150px;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 250px;
  gap: 20px;

  @media (max-width: 1080px) {
    justify-content: flex-start;
    height: 100%;
    margin-top: -10px;
  }
`;

export const Paragraph = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  width: 40%;
  font-size: 26px;
  text-align: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  margin-top: 25px;
  @media (max-width: 1080px) {
    font-size: 30px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: start;
  font-family: sans-serif;

  @media (max-width: 1080px) {
    align-items: center;
  }
`;

export const AdditionalInfo = styled.p``;

export const DescriptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  font-size: 25px;
  padding: 5px 0;
  @media (max-width: 1080px) {
    font-size: 20px;
  }
`;

export const DescriptionLabel = styled.div`
  font-weight: bold;
  flex: 1;
  text-align: right;
  padding-right: 10px;
`;

export const DescriptionValue = styled.div`
  flex: 2;
  text-align: left;
`;
