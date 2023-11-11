import { useState, useEffect } from 'react';
import Modal from '../Modal';
import { GalleryContainer, GalleryImage, GalleryImageContainer } from './style';
import PropTypes from 'prop-types';
import { LoadingModalContainer } from '../Loading/style';
import { FavouriteButton } from '../Icons';
import getAllFavourites from '../../api/favourites';
import { setFavourites } from '../../store/favourites/favourites';
import { useDispatch, useSelector } from 'react-redux';
import checkFavourite from '../../utils/checkFavourite';
import { useNavigate } from 'react-router-dom';
import { getPhotoGallery } from '../../api/photos';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [favouriteList, setFavouriteList] = useState([]);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.page.value);
  const navigate = useNavigate();

  useEffect(() => {
    const refreshGallery = async (page) => {
      try {
        setIsLoading(true);
        const gallery = await getPhotoGallery(page);
        setImages(gallery);
        const response = await getAllFavourites();
        dispatch(setFavourites(response));
        setFavouriteList(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    navigate(`/Gallery?page=${currentPage}`);
    refreshGallery(currentPage);
  }, [dispatch, currentPage, navigate]);

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
        images.map((image, index) => (
          <GalleryImageContainer key={index}>
            <GalleryImage
              src={image.url}
              alt={`Image ${index}`}
              onClick={() => openModal(image.url)}
            />
            <FavouriteButton
              image={image.id}
              favourite={checkFavourite(favouriteList, image)}
            ></FavouriteButton>
          </GalleryImageContainer>
        ))
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
