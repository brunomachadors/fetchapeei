import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkNavbarAlternative = styled(Link)`
  color: white;
  font-size: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  text-decoration: none;
  margin: 0 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const TabButton = styled.button`
  font-size: 18px;
  width: 160px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? '#fcebda' : '#f9dec9')};
  border: none;
  border-left: #a0a0a0 0.2px solid;
  color: black;
`;

export const TabButtonDark = styled.button`
  font-size: 18px;
  width: 320px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background-color: #303030;
  border: none;
  border-left: #a0a0a0 0.2px solid;
  gap: 10px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
  height: 160px;
`;

export const PawIcon = styled.img`
  width: 25px;
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
  gap: 15px;
`;

export const YellowText = styled.div`
  color: #ffd902;
`;

export const RegularText = styled.div`
  color: white;
`;
