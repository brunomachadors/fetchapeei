import Sidebar, { FavouritesSideBar, PageSideBar } from '../SideBar';
import {
  Description,
  DescriptionLabel,
  DescriptionRow,
  DescriptionValue,
  LandingContainer,
  LandingDescription,
  Title,
  VintageDog,
} from './style';
import { ContentContainer, ContentInfo } from './style';
import { getAllBreeds } from '../../api/breeds';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPhotoById } from '../../api/photos';
import PhotoGallery from '../PhotoGallery';
import { SinglePhoto } from '../Photo/style';
import Favourites from '../Favourites';
import vintageDogImage from '/Users/mindera/Documents/source/bootcamp-fe/Fetch-a-pee-I/src/assets/backgrondDog.png';
import FavouriteButton from '../Icons';
import getAllFavourites from '../../api/favourites';
import checkFavourite from '../../utils/checkFavourite';

export function LandingContent() {
  return (
    <LandingContainer>
      <LandingDescription>
        Welcome to &quot;Fetch a Pee I,&quot; your one-stop destination for
        discovering dog breeds and collecting your favorite dog photos. Explore
        a vast database of dog breeds, view stunning images, and easily add your
        furry friends to your favorites. Whether you&quot;re a seasoned dog
        lover or a curious explorer, &quot;Fetch a Pee I&quot; is here to make
        your journey into the world of dogs a paw-some experience!
      </LandingDescription>

      <VintageDog src={vintageDogImage}></VintageDog>
    </LandingContainer>
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
  const favouritesData = useSelector((state) => state.favourites.data);

  return (
    <ContentContainer>
      <ContentInfo>
        <Favourites></Favourites>
      </ContentInfo>
      <FavouritesSideBar list={favouritesData}></FavouritesSideBar>
    </ContentContainer>
  );
}

export function PhotosContent() {
  const [breeds, setBreeds] = useState([]);
  const breed = useSelector((state) => state.breed.selectedBreed);
  const [dogImage, setDogImage] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllBreeds();
        setBreeds(data);
        const image = await getPhotoById(breed.reference_image_id);
        setDogImage(image);
        const response = await getAllFavourites();
        setIsFavourite(checkFavourite(response, image));
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    }

    fetchData();
  }, [breed.reference_image_id]);

  return (
    <ContentContainer>
      <ContentInfo>
        <Title>{breed.name}</Title>
        {dogImage ? (
          <SinglePhoto src={dogImage.url} />
        ) : (
          <div>Loading image...</div>
        )}
        <FavouriteButton
          image={dogImage?.id}
          favourite={isFavourite}
        ></FavouriteButton>
      </ContentInfo>

      <Sidebar list={breeds} />
    </ContentContainer>
  );
}

export function GalleryContent() {
  return (
    <ContentContainer>
      <ContentInfo>
        <PhotoGallery></PhotoGallery>
      </ContentInfo>
      <PageSideBar></PageSideBar>
    </ContentContainer>
  );
}

export default LandingContent;
