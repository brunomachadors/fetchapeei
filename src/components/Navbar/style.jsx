import { styled } from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 160px;
`;

export const PawIcon = styled.img`
  width: 25px;
  position: relative;
  margin-right: -15px;
  filter: invert(1);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const YellowText = styled.div`
  color: #ffd902;
`;

export const RegularText = styled.div`
  color: white;
`;
