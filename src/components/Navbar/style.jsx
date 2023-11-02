import { styled } from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 160px;

  @media (max-width: 1080px) {
    flex-direction: column;
    margin-top: 0px;
  }

  @media (max-height: 720px) {
    width: 100%;
    flex-direction: column;
    height: 160px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 160px;

  @media (max-width: 1080px) {
    width: 100%;
    flex-direction: row;
    height: 210px;
  }

  @media (max-width: 720px) {
    width: 100%;
    flex-direction: column;
    height: 180px;
  }
`;
