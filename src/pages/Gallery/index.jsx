import { GalleryContent } from '../../components/Content';
import Navbar from '../../components/Navbar';
import { Page } from '../../components/ModelPage/style';

function Gallery() {
  return (
    <Page>
      <Navbar selectedPage={'Gallery'} />
      <GalleryContent></GalleryContent>
    </Page>
  );
}

export default Gallery;
