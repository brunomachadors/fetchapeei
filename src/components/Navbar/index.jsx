//styled components
import { Menu, NavbarContainer } from './style';
import { Select } from '../Select/style';
import { Search } from '../Search';

//Dependencies
import PropTypes from 'prop-types';
import { BreedsTab, FavouritesTab, LandingTab, PhotosTab } from '../Tabs';

function Navbar({ selectText = '', selectedPage }) {
  return (
    <NavbarContainer>
      <LandingTab></LandingTab>
      <Menu>
        <BreedsTab selectedPage={selectedPage}></BreedsTab>
        <FavouritesTab selectedPage={selectedPage}></FavouritesTab>
        <PhotosTab selectedPage={selectedPage}></PhotosTab>
        <Search />
      </Menu>
      <Select>{selectText}</Select>
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  selectText: PropTypes.string,
  selectedPage: PropTypes.string,
};

export default Navbar;
