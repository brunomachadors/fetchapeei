import { useDispatch } from 'react-redux';
import { Bar, Button, Item, List, Name } from './style';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { selectBreed } from '../../store/breed/breed';
import { selectPage } from '../../store/currentPage/currentPage';
import {
  GalleryImage,
  GalleryModalBackground,
  GalleryModalContent,
} from '../Modal/style';
import { useNavigate } from 'react-router-dom';

function Sidebar({ list = [], selectedBreed }) {
  console.log(selectedBreed);
  const dispatch = useDispatch();
  const [selectedBreedId, setSelectedBreedId] = useState(null);

  useEffect(() => {
    dispatch(selectBreed(selectedBreed));
    setSelectedBreedId(selectedBreed.id);
  }, [dispatch, selectedBreed]);

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
  selectedBreed: PropTypes.object,
};

export function FavouritesSideBar({ list = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFavoriteClick = (image) => {
    setSelectedImage(image.image);
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
              <Name>Favorite: {index}</Name>
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
          </GalleryModalContent>
        </GalleryModalBackground>
      )}
    </Bar>
  );
}

FavouritesSideBar.propTypes = {
  list: PropTypes.array,
};

export function PageSideBar() {
  const dispatch = useDispatch();
  const [selectedPage, setSelectedPage] = useState(null);
  const navigate = useNavigate();
  const list = Array.from({ length: 102 }, (_, i) => i);

  const handleButtonClick = (item) => {
    dispatch(selectPage(item));
    setSelectedPage(item);
    navigate(`/Gallery?page=${selectedPage}`);
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
