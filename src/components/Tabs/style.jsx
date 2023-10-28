import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkNavbar = styled(Link)`
  color: black;
  font-size: 18px;
  width: 100%;
  height: 100%;
  display: flex;
  text-decoration: none;
  margin: 0 30px;
  align-items: center;
`;

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

export const BreedsButton = styled.button`
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

export const FavouritesButton = styled.button`
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

export const PhotosButton = styled.button`
  width: 160px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? '#fcebda' : '#f9dec9')};
  border: none;
  border-left: gray 0.2px solid;
  color: black;

  &.selected {
    background-color: #fcebda;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
  height: 160px;
`;
