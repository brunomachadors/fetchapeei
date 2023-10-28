import styled from 'styled-components';

export const FavouritesBtn = styled.div`
  width: 160px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9dec9;
  border-left: #a0a0a0 0.2px solid;
  color: black;

  selected: {
    background-color: #fcebda;
    border-left: none;
  }
`;
