import { useState, useEffect } from 'react';
import Modal from '../Modal';
import { GalleryContainer, GalleryImage, GalleryImageContainer } from './style';
import PropTypes from 'prop-types';
import { LoadingModalContainer } from '../Loading/style';
import { FavouriteButton } from '../Icons';
import getAllFavourites from '../../api/favourites';
import { setFavourites } from '../../store/favourites/favourites';
import { useDispatch, useSelector } from 'react-redux';

const PhotoGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const favouriteList = useSelector((state) => state.favourites.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const favorites = await getAllFavourites();
        dispatch(setFavourites(favorites));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching favorites:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const checkFavourite = (image) => {
    const isFavourite = favouriteList.some(
      (favorite) => favorite.image_id === image.id
    );

    return isFavourite;
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <GalleryContainer>
      {isLoading ? (
        <LoadingModalContainer />
      ) : (
        images.map((image, index) => {
          return (
            <GalleryImageContainer key={index}>
              <GalleryImage
                key={index}
                src={image.url}
                alt={`Image ${index}`}
                onClick={() => openModal(image.url)}
              />
              <FavouriteButton
                image={image}
                favourite={checkFavourite(image)}
              ></FavouriteButton>
            </GalleryImageContainer>
          );
        })
      )}
      <Modal
        isOpen={selectedImage !== null}
        onClose={closeModal}
        imageSrc={selectedImage}
      />
    </GalleryContainer>
  );
};

PhotoGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PhotoGallery;
