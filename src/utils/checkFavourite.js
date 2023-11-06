export default function checkFavourite(favourites, image) {
  const isFavourite = favourites.some(
    (favourite) => favourite.image_id === image.id
  );

  return isFavourite;
}
