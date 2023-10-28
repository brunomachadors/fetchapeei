//styled components
import {
  NavbarContainer,
  PawIcon,
  RegularText,
  TextContainer,
  YellowText,
} from './style';
import { Landing } from '../Landing/style';
import { Menu } from '../Menu/style';
import { Select } from '../Select/style';
import { Search } from '../Search';
import {
  BreedsButton,
  FavouritesButton,
  LinkNavbar,
  LinkNavbarAlternative,
  PhotosButton,
} from '../Tabs/style';

//Icons
import pawIcon from '../../assets/icons/paw_4.svg';

//Dependencies
import PropTypes from 'prop-types';

function Navbar({ selectText = '', selectedPage }) {
  return (
    <NavbarContainer>
      <Landing>
        <PawIcon src={pawIcon} />
        <LinkNavbarAlternative to={'/'}>
          <RegularText>FETCH A</RegularText>
          <TextContainer>
            <YellowText>PEE</YellowText> <RegularText>I</RegularText>
          </TextContainer>
        </LinkNavbarAlternative>
      </Landing>
      <Menu>
        <BreedsButton selected={selectedPage === 'breeds'}>
          <LinkNavbar to={'/breeds'}>BREEDS</LinkNavbar>
        </BreedsButton>
        <FavouritesButton selected={selectedPage === 'favourites'}>
          <LinkNavbar to={'/favourites'}>FAVOURITES</LinkNavbar>
        </FavouritesButton>
        <PhotosButton selected={selectedPage === 'photos'}>
          <LinkNavbar to={'/photos'}>PHOTOS</LinkNavbar>
        </PhotosButton>
      </Menu>
      <Search />
      <Select>{selectText}</Select>
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  selectText: PropTypes.string,
  selectedPage: PropTypes.string,
};

export default Navbar;
