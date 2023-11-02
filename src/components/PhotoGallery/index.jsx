import { useState, useEffect } from 'react';
import Modal from '../Modal';
import { GalleryContainer, GalleryImage } from './style';
import PropTypes from 'prop-types';
import { LoadingModalContainer } from '../Loading/style';

const PhotoGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
          <GalleryImage
            key={index}
            src={image.url}
            alt={`Image ${index}`}
            onClick={() => openModal(image.url)}
          />
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
