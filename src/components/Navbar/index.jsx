import { NavbarContainer } from './style';
import { Landing } from '../Landing/style';
import { Menu } from '../Menu/style';

import { Select } from '../Select/style';
import Breeds from '../Menu/Breeds';
import Favourites from '../Menu/Favourites';
import Photos from '../Menu/Photos';
import { Search } from '../Search';

function Navbar() {
  return (
    <NavbarContainer>
      <Landing>FETCH A PEE I</Landing>
      <Menu>
        <Breeds />
        <Favourites />
        <Photos />
      </Menu>
      <Search></Search>
      <Select>SELECT</Select>
    </NavbarContainer>
  );
}

export default Navbar;
