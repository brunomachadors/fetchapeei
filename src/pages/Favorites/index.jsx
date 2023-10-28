import Content from '../../components/Content';
import Navbar from '../../components/Navbar';
import { Page } from '../../components/ModelPage/style';

function Favourites() {
  return (
    <Page>
      <Navbar selectText="SELECT FAVOURITE" selectedPage={'favourites'} />
      <h1>Favourites</h1>
      <Content />
    </Page>
  );
}

export default Favourites;
