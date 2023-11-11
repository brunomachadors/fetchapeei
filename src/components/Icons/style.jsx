import styled from 'styled-components';
import favoriteIconImage from '../../assets/icons/favourite.png';
import favouriteIconGold from '../../assets/icons/favouriteGold.png';

export const FavoriteIcon = styled.button`
  width: 24px;
  height: 24px;
  background: ${(props) =>
    props.isfavourite
      ? `url(${favouriteIconGold})`
      : `url(${favoriteIconImage})`};
  background-size: cover;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  border: none;
  outline: none;
  margin-top: 10px;
  position: relative;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.2);
  }
`;
