import styled from 'styled-components';

export const FavouritesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  width: 70%;
  height: 70%;
  gap: 20px;
`;

export const FavouriteRow = styled.div`
  padding: 10px;
`;

export const FavouritePhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

export const RemoveButton = styled.button`
  background: transparent;
  color: #fff;
  padding: 8px 16px;
  border: 1px solid white;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.3s;
  position: relative;
  top: -40px;

  &:hover {
    background: #e04f4f;
  }
`;
