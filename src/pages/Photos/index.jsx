import Content from '../../components/Content';
import Navbar from '../../components/Navbar';
import { Page } from '../../components/ModelPage/style';

function Photos() {
  return (
    <Page>
      <Navbar selectText="SELECT PHOTO" selectedPage={'photos'} />
      <h1>Photos</h1>
      <Content />
    </Page>
  );
}

export default Photos;
