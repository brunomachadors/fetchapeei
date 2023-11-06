import { useState } from 'react';
import PropTypes from 'prop-types';
import { FavoriteIcon } from './style';
import getAllFavourites, {
  deleteFavourite,
  postFavourite,
} from '../../api/favourites';

export const FavouriteButton = ({ image, favourite }) => {
  const [isFavorite, setIsFavorite] = useState(favourite);

  const toggleFavorite = async () => {
    setIsFavorite(!isFavorite);

    if (favourite) {
      const favourites = await getAllFavourites();
      const filteredData = favourites.filter(
        (item) => item.image_id === image.id
      );
      console.log(filteredData[0]);
      deleteFavourite(filteredData[0].id);
    } else {
      postFavourite(image.id);
    }
  };

  return (
    <FavoriteIcon
      onClick={toggleFavorite}
      isfavourite={isFavorite}
      style={{ transform: isFavorite ? 'scale(1.2)' : 'scale(1)' }}
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
