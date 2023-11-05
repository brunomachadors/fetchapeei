import styled from 'styled-components';

export const FavouritesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  width: 100%;
  gap: 70px;
`;

export const FavouritePhoto = styled.img`
  width: 70%;
  height: 70%;
  object-fit: cover;
  position: relative;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const RemoveButtonHover = styled.button`
  background: #f9dec9;
  color: black;
  padding: 8px 10px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;

  &:hover {
    background: #ffb67e;
  }
`;
