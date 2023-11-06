import PropTypes from 'prop-types';
import { FavoriteIcon } from './style';
import getAllFavourites, {
  deleteFavourite,
  postFavourite,
} from '../../api/favourites';
import { useState } from 'react';

export const FavouriteButton = ({ image, favourite }) => {
  const [isFavourite, setIsFavourite] = useState(favourite);

  const toggleFavorite = async () => {
    if (favourite) {
      const favourites = await getAllFavourites();
      const filteredData = favourites.filter((item) => item.image_id === image);
      console.log(filteredData);
      deleteFavourite(filteredData[0].id);
      setIsFavourite(false);
    } else {
      postFavourite(image);
      setIsFavourite(true);
    }
  };

  return (
    <FavoriteIcon
      onClick={toggleFavorite}
      isfavourite={isFavourite}
      style={{ transform: isFavourite ? 'scale(1.2)' : 'scale(1)' }}
    />
  );
};

FavouriteButton.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  favourite: PropTypes.bool,
};

export default FavouriteButton;
