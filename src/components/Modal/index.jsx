import PropTypes from 'prop-types';
import {
  GalleryImage,
  GalleryModalBackground,
  GalleryModalContent,
} from './style';

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <GalleryModalBackground onClick={onClose}>
      <GalleryModalContent>
        <GalleryImage src={imageSrc} alt="Selected Image"></GalleryImage>
      </GalleryModalContent>
    </GalleryModalBackground>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageSrc: PropTypes.string,
};
