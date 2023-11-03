import { useEffect, useState } from 'react';
import { FavouritePhoto, FavouritesContainer } from './style';
import { getAllFavourites } from '../../api/favourites';
import { useDispatch } from 'react-redux';
import { setFavourites } from '../../store/favourites/favourites';

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
  }, []);

  return (
    <FavouritesContainer>
      {favouriteImages.map((favourite, index) => (
        <FavouritePhoto key={index} src={favourite.image.url}></FavouritePhoto>
      ))}
    </FavouritesContainer>
  );
}
