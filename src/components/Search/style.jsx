import styled from 'styled-components';

export const SearchContainer = styled.div`
  background-color: rgba(253, 243, 233, 1);
  height: 160px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;

  @media (max-width: 1080px) {
    width: 100%;
    height: 500px;
    gap: 5px;
    justify-content: center;
  }
`;

export const SearchInput = styled.input`
  color: black;
  background-color: rgba(253, 243, 233, 1);
  width: 70%;
  max-width: 480px;
  height: 30px;
  position: relative;

  @media (max-width: 1080px) {
    width: 70%;
    display: flex;
    align-items: center;
  }
`;

export const LensIcon = styled.img`
  width: 30px;
  position: relative;
  margin-right: 30px;

  @media (max-width: 1080px) {
    margin-right: 0px;
  }
`;
