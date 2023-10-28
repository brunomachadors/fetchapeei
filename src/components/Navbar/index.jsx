import { NavbarContainer } from "./style";
import { Landing } from "../Landing/style";
import { Menu } from "../Menu/style";
import { Search } from "../Search/style";
import { Select } from "../Select/style";
import Breeds from "../Menu/Breeds";
import Favourites from "../Menu/Favourites";
import Photos from "../Menu/Photos";

function Navbar() {
  return (
    <NavbarContainer>
      <Landing>Landing</Landing>
      <Menu>
        <Breeds />
        <Favourites />
        <Photos />
      </Menu>
      <Search>Search</Search>
      <Select>Select</Select>
    </NavbarContainer>
  );
}

export default Navbar;
