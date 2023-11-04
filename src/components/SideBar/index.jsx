import { useDispatch } from 'react-redux';
import { Bar, Button, Item, List, Name } from './style';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { selectBreed } from '../../store/breed/breed';
import { selectPage } from '../../store/currentPage/currentPage';
import {
  GalleryImage,
  GalleryModalBackground,
  GalleryModalContent,
} from '../Modal/style';
import { RemoveButtonHover } from '../Favourites/style';

function Sidebar({ list = [] }) {
  const dispatch = useDispatch();
  const [selectedBreedId, setSelectedBreedId] = useState(null);

  const handleButtonClick = (item) => {
    dispatch(selectBreed(item));
    setSelectedBreedId(item.id);
  };

  return (
    <Bar>
      <List>
        {list.map((item) => (
          <Button
            key={item.id}
            aria-label="select breed"
            onClick={() => handleButtonClick(item)}
            selected={item.id === selectedBreedId}
          >
            <Item>
              <Name>{item.name}</Name>
            </Item>
          </Button>
        ))}
      </List>
    </Bar>
  );
}

Sidebar.propTypes = {
  list: PropTypes.array,
};

export function FavouritesSideBar({ list = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFavoriteClick = (image) => {
    setSelectedImage(image.image);
  };

  const handleRemoveFromFavorites = () => {
    setSelectedImage(null);
  };

  return (
    <Bar>
      <List>
        {list.map((item, index) => (
          <Button
            key={item.id}
            aria-label="select favorite"
            onClick={() => handleFavoriteClick(item)}
          >
            <Item>
              <Name>Favorite: {index + 1}</Name>
            </Item>
          </Button>
        ))}
      </List>
      {selectedImage && (
        <GalleryModalBackground onClick={() => setSelectedImage(null)}>
          <GalleryModalContent>
            <GalleryImage
              src={selectedImage.url}
              alt="Selected Favorite"
            ></GalleryImage>
            <RemoveButtonHover onClick={handleRemoveFromFavorites}>
              Remove from Favorites
            </RemoveButtonHover>
          </GalleryModalContent>
        </GalleryModalBackground>
      )}
    </Bar>
  );
}

FavouritesSideBar.propTypes = {
  list: PropTypes.array,
};

export function PageSideBar({ list = [] }) {
  const dispatch = useDispatch();
  const [selectedPage, setSelectedPage] = useState(null);

  const handleButtonClick = (item) => {
    dispatch(selectPage(item));
    setSelectedPage(item);
  };

  return (
    <Bar>
      <List>
        {list.map((item) => (
          <Button
            key={item}
            aria-label="select page"
            onClick={() => handleButtonClick(item)}
            selected={item === selectedPage}
          >
            <Item>
              <Name>{item}</Name>
            </Item>
          </Button>
        ))}
      </List>
    </Bar>
  );
}

PageSideBar.propTypes = {
  list: PropTypes.array,
};

export default Sidebar;
