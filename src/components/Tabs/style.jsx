import styled from 'styled-components';

export const TabButton = styled.button`
  font-size: 18px;
  width: 10%;
  min-width: 160px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? '#fcebda' : '#f9dec9')};
  border: none;
  border-left: #a0a0a0 0.2px solid;
  color: #303030;

  @media (max-width: 1080px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 60px;
  }
`;

export const TabButtonDark = styled.button`
  font-size: 18px;
  width: 15%;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #202020;
  border: none;
  border-left: #a0a0a0 0.2px solid;
  gap: 10px;

  @media (max-width: 1080px) {
    width: 100%;
    position: relative;
    padding: 10px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 160px;
`;

export const PawIcon = styled.img`
  width: 35px;
  position: relative;
  filter: invert(1);
`;

export const TextContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;

export const YellowText = styled.div`
  color: #ffd902;
`;

export const RegularText = styled.div`
  color: white;
`;
