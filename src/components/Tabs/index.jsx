import { BreedsButton, FavouritesButton, PhotosButton } from './style';

export function BreedsTab() {
  return (
    <BreedsButton to="/breeds" className="selected">
      BREEDS
    </BreedsButton>
  );
}

export function FavouritesTab() {
  return (
    <FavouritesButton to="/favourites" className="selected">
      FAVOURITES
    </FavouritesButton>
  );
}

export function PhotosTab() {
  return (
    <PhotosButton to="/photos" className="selected">
      PHOTOS
    </PhotosButton>
  );
}
