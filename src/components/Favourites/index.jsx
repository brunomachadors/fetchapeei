import { useEffect, useState } from 'react';
import { FavouritePhoto, FavouritesContainer, ImageContainer } from './style';
import { useDispatch } from 'react-redux';
import { setFavourites } from '../../store/favourites/favourites';
import getAllFavourites from '../../api/favourites';
import FavouriteButton from '../Icons';
import {
  GalleryImage,
  GalleryModalBackground,
  GalleryModalContent,
} from '../Modal/style';

export default function Favourites() {
  const [favouriteImages, setFavouriteImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchFavourites() {
      const response = await getAllFavourites();
      dispatch(setFavourites(response));
      setFavouriteImages(response);
    }

    fetchFavourites();
  }, [dispatch]);

  const handleRemoveFromFavorites = (index) => {
    const updatedFavouriteImages = [...favouriteImages];
    updatedFavouriteImages.splice(index, 1);
    setFavouriteImages(updatedFavouriteImages);
  };

  const handleImageClick = (image, index) => {
    setSelectedImage({ image, index });
    console.log(selectedImage);
  };

  return (
    <FavouritesContainer>
      {favouriteImages.map((favourite, index) => (
        <ImageContainer
          key={index}
          onClick={() => handleImageClick(favourite.image, index)}
        >
          <FavouritePhoto src={favourite.image.url} />
          <FavouriteButton
            favourite
            onClick={() => handleRemoveFromFavorites(index)}
          ></FavouriteButton>
        </ImageContainer>
      ))}
      {selectedImage && (
        <GalleryModalBackground onClick={() => setSelectedImage(null)}>
          <GalleryModalContent>
            <GalleryImage
              src={selectedImage.image.url}
              alt="Selected Favorite"
            ></GalleryImage>
            <FavouriteButton
              favourite
              onClick={() => handleRemoveFromFavorites(selectedImage.index)}
            ></FavouriteButton>
          </GalleryModalContent>
        </GalleryModalBackground>
      )}
    </FavouritesContainer>
  );
}
