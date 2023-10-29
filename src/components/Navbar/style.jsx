import { styled } from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 160px;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  height: 160px;

  @media (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    height: 210px;
  }
`;
