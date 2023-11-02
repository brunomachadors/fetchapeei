//styled components
import { Menu, NavbarContainer } from './style';
import { Select } from '../Select/style';
import { Search } from '../Search';

//Dependencies
import PropTypes from 'prop-types';
import {
  BreedsTab,
  FavouritesTab,
  GalleryTab,
  LandingTab,
  PhotosTab,
} from '../Tabs';

function Navbar({ selectText = '', selectedPage }) {
  return (
    <NavbarContainer>
      <LandingTab></LandingTab>
      <Menu>
        <BreedsTab selectedPage={selectedPage}></BreedsTab>
        <PhotosTab selectedPage={selectedPage}></PhotosTab>
        <GalleryTab selectedPage={selectedPage}></GalleryTab>
        <FavouritesTab selectedPage={selectedPage}></FavouritesTab>
        <Search />
      </Menu>
      {selectText && <Select>{selectText}</Select>}
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  selectText: PropTypes.string,
  selectedPage: PropTypes.string,
};

export default Navbar;
