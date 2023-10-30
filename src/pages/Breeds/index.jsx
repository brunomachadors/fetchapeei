import { BreedsContent } from '../../components/Content';
import Navbar from '../../components/Navbar';
import { Page } from '../../components/ModelPage/style';

function Breeds() {
  return (
    <Page>
      <Navbar selectText="SELECT BREED" selectedPage={'breeds'} />
      <BreedsContent></BreedsContent>
    </Page>
  );
}

export default Breeds;
