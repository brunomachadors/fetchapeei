import { LandingContent } from '../../components/Content';
import Navbar from '../../components/Navbar';
import { Page } from '../../components/ModelPage/style';

function LandingPage() {
  return (
    <Page>
      <Navbar />
      <LandingContent></LandingContent>
    </Page>
  );
}

export default LandingPage;
