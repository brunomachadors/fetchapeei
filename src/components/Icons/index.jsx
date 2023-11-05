import { useState } from 'react';
import PropTypes from 'prop-types';
import { FavoriteIcon } from './style';

export const FavouriteButton = ({ favourite }) => {
  const [isFavorite, setIsFavorite] = useState(favourite);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <FavoriteIcon
      onClick={toggleFavorite}
      isFavorite={isFavorite}
      style={{ transform: isFavorite ? 'scale(1.2)' : 'scale(1)' }}
    />
  );
};

FavouriteButton.propTypes = {
  favourite: PropTypes.bool,
};

export default FavouriteButton;
