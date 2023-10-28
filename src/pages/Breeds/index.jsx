import Content from '../../components/Content';
import Navbar from '../../components/Navbar';
import { Page } from '../../components/ModelPage/style';

function Breeds() {
  return (
    <Page>
      <Navbar selectText="SELECT BREEDS" selectedPage={'breeds'} />
      <h1>Breeds</h1>
      <Content />
    </Page>
  );
}

export default Breeds;
