import Content, { FavouritesContent } from "../../components/Content";
import Navbar from "../../components/Navbar";
import { Page } from "../../components/ModelPage/style";

function Favourites() {
  return (
    <Page>
      <Navbar selectText="SELECT FAVOURITE" selectedPage={"favourites"} />
      <FavouritesContent></FavouritesContent>
    </Page>
  );
}

export default Favourites;
