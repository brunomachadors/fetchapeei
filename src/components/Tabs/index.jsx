import { useNavigate } from 'react-router-dom';
import {
  PawIcon,
  RegularText,
  TabButton,
  TabButtonDark,
  TextContainerColumn,
  TextContainerRow,
  YellowText,
} from './style';
import PropTypes from 'prop-types';

import pawIcon from '../../assets/icons/paw_4.svg';

export function LandingTab() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <TabButtonDark onClick={handleClick}>
      <PawIcon src={pawIcon} />
      <TextContainerColumn>
        <RegularText>FETCH A</RegularText>
        <TextContainerRow>
          <YellowText>PEE</YellowText> <RegularText>I</RegularText>
        </TextContainerRow>
      </TextContainerColumn>
    </TabButtonDark>
  );
}

export function BreedsTab({ selectedPage }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/breeds');
  };

  return (
    <TabButton selected={selectedPage === 'breeds'} onClick={handleClick}>
      BREEDS
    </TabButton>
  );
}

BreedsTab.propTypes = {
  selectedPage: PropTypes.string,
};

export function FavouritesTab({ selectedPage }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/favourites');
  };

  return (
    <TabButton selected={selectedPage === 'favourites'} onClick={handleClick}>
      FAVOURITES
    </TabButton>
  );
}

FavouritesTab.propTypes = {
  selectedPage: PropTypes.string,
};

export function PhotosTab({ selectedPage }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/photos');
  };

  return (
    <TabButton selected={selectedPage === 'photos'} onClick={handleClick}>
      PHOTOS
    </TabButton>
  );
}

PhotosTab.propTypes = {
  selectedPage: PropTypes.string,
};
