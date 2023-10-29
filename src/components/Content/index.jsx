import Sidebar from '../SideBar';
import { AdditionalInfo, Description, Title } from '../SideBar/style';
import { ContentContainer, ContentInfo } from './style';

export default function Content() {
  return <ContentContainer>Content goes here</ContentContainer>;
}

export function LandingContent() {
  return (
    <ContentContainer>
      <ContentInfo>CONTENT INFO</ContentInfo>
    </ContentContainer>
  );
}

export function BreedsContent() {
  return (
    <ContentContainer>
      <ContentInfo>
        <Title>Breeds</Title>
        <Description>Breeds Description</Description>
        <AdditionalInfo>Additional information Breeds</AdditionalInfo>
      </ContentInfo>
      <Sidebar></Sidebar>
    </ContentContainer>
  );
}
