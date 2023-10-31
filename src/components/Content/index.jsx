import Sidebar from '../SideBar';
import { AdditionalInfo, Description, Title } from '../SideBar/style';
import { ContentContainer, ContentInfo } from './style';
import { getAllBreeds } from '../../api/breeds';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function LandingContent() {
  return (
    <ContentContainer>
      <ContentInfo>
        <Title>Landing</Title>
        <Description>Landing Content</Description>
        <AdditionalInfo>Additional information Landing</AdditionalInfo>
      </ContentInfo>
      <Sidebar></Sidebar>
    </ContentContainer>
  );
}

export function BreedsContent() {
  const [breeds, setBreeds] = useState([]);
  const breed = useSelector((state) => state.breed.selectedBreed);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllBreeds();
        setBreeds(data);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <ContentContainer>
      <ContentInfo>
        <Title>{breed.name}</Title>
        <Description>weight: {breed.weight.metric}</Description>
        <AdditionalInfo>Additional information Breeds</AdditionalInfo>
      </ContentInfo>
      <Sidebar list={breeds}></Sidebar>
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
