import Sidebar from '../SideBar';
import {
  AdditionalInfo,
  Description,
  DescriptionLabel,
  DescriptionRow,
  DescriptionValue,
  LandingDescription,
  LandingLi,
  LandingUl,
  Title,
} from './style';
import { ContentContainer, ContentInfo } from './style';
import { getAllBreeds } from '../../api/breeds';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPhotoById, getPhotoGallery } from '../../api/photos';
import PhotoGallery from '../PhotoGallery';
import { SinglePhoto } from '../Photo/style';

export function LandingContent() {
  return (
    <ContentContainer style={{ backgroundColor: 'rgba(253, 243, 233, 1)' }}>
      <ContentInfo>
        <Title>Welcome to Fetch A P I</Title>
        <Description style={{ fontFamily: 'Play', margin: '0 10vw' }}>
          <LandingDescription>
            This responsive website was a part of our Front-end Bootcamp
            projects @MinderaSchool, it uses pretty much all the components that
            we studied during of this course.
          </LandingDescription>
        </Description>
        <AdditionalInfo>
          <LandingUl>
            <LandingLi>API</LandingLi>
            <LandingLi>HTML</LandingLi>
            <LandingLi>Redux</LandingLi>
            <LandingLi>UseState & UseEffect</LandingLi>
            <LandingLi>Styled Components</LandingLi>
            <LandingLi>VITE & React</LandingLi>
          </LandingUl>
        </AdditionalInfo>
      </ContentInfo>
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
        <Description>
          <DescriptionRow>
            <DescriptionLabel>Name:</DescriptionLabel>
            <DescriptionValue>{breed.name}</DescriptionValue>
          </DescriptionRow>
          <DescriptionRow>
            <DescriptionLabel>Breed for:</DescriptionLabel>
            <DescriptionValue>{breed.bred_for || 'Unknown'}</DescriptionValue>
          </DescriptionRow>
          <DescriptionRow>
            <DescriptionLabel>Life span:</DescriptionLabel>
            <DescriptionValue>{breed.life_span}</DescriptionValue>
          </DescriptionRow>
          <DescriptionRow>
            <DescriptionLabel>Temperament:</DescriptionLabel>
            <DescriptionValue>{breed.temperament}</DescriptionValue>
          </DescriptionRow>
          <DescriptionRow>
            <DescriptionLabel>Origin:</DescriptionLabel>
            <DescriptionValue>{breed.origin || 'Unknown'}</DescriptionValue>
          </DescriptionRow>
          <DescriptionRow>
            <DescriptionLabel>Weight:</DescriptionLabel>
            <DescriptionValue>{breed.weight.metric} kg</DescriptionValue>
          </DescriptionRow>
          <DescriptionRow>
            <DescriptionLabel>Height:</DescriptionLabel>
            <DescriptionValue>{breed.height.metric} cm</DescriptionValue>
          </DescriptionRow>
        </Description>
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
  const [breeds, setBreeds] = useState([]);
  const breed = useSelector((state) => state.breed.selectedBreed);
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllBreeds();
        setBreeds(data);

        const image = await getPhotoById(breed.reference_image_id);
        setDogImage(image);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    }

    fetchData();
  }, [breed.reference_image_id]);

  return (
    <ContentContainer>
      <ContentInfo>
        {dogImage ? (
          <SinglePhoto src={dogImage.url} />
        ) : (
          <div>Loading image...</div>
        )}
      </ContentInfo>
      <Sidebar list={breeds} />
    </ContentContainer>
  );
}

export function GalleryContent() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchGalery() {
      try {
        const gallery = await getPhotoGallery();
        setImages(gallery);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    }

    fetchGalery();
  }, []);

  return <PhotoGallery images={images}></PhotoGallery>;
}
export default LandingContent;
