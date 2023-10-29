import Sidebar from '../SideBar';
import { AdditionalInfo, Description, Title } from '../SideBar/style';
import { ContentContainer, ContentInfo } from './style';

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

export function FavouritesContent() {
  return (
    <ContentContainer>
      <ContentInfo>
        <Title>Favourites</Title>
        <Description>Favourites Description</Description>
        <AdditionalInfo>Additional information Favourites</AdditionalInfo>
      </ContentInfo>
      <Sidebar></Sidebar>
    </ContentContainer>
  );
}

export function PhotosContent() {
  return (
    <ContentContainer>
      <ContentInfo>
        <Title>Photos</Title>
        <Description>Photos</Description>
        <AdditionalInfo>Additional information Photos</AdditionalInfo>
      </ContentInfo>
      <Sidebar></Sidebar>
    </ContentContainer>
  );
}

export default LandingContent;
