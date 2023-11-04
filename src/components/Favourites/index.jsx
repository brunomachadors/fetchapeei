import { useEffect, useState } from 'react';
import {
  FavouritePhoto,
  FavouritesContainer,
  ImageContainer,
  RemoveButton,
} from './style';
import { useDispatch } from 'react-redux';
import { setFavourites } from '../../store/favourites/favourites';
import getAllFavourites from '../../api/favourites';

export default function Favourites() {
  const [favouriteImages, setFavouriteImages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function FetchFavourites() {
      const response = await getAllFavourites();
      dispatch(setFavourites(response));
      setFavouriteImages(response);
    }

    FetchFavourites();
  }, [dispatch]);

  const handleRemoveFromFavorites = (index) => {
    console.log(index);
  };

  return (
    <FavouritesContainer>
      {favouriteImages.map((favourite, index) => (
        <ImageContainer key={index}>
          <FavouritePhoto src={favourite.image.url} />
          <RemoveButton onClick={() => handleRemoveFromFavorites(index)}>
            Remove Favourite {index + 1}
          </RemoveButton>
        </ImageContainer>
      ))}
    </FavouritesContainer>
  );
}
