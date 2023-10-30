import { PhotosContent } from '../../components/Content';
import Navbar from '../../components/Navbar';
import { Page } from '../../components/ModelPage/style';

function Photos() {
  return (
    <Page>
      <Navbar selectText="SELECT PHOTO" selectedPage={'photos'} />
      <PhotosContent></PhotosContent>
    </Page>
  );
}

export default Photos;
