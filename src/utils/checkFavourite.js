export default function checkFavourite(favourites, image) {
  console.log(favourites);
  console.log(image);
  const isFavourite = favourites.some(
    (favourite) => favourite.image_id === image.id
  );

  console.log(isFavourite);

  return isFavourite;
}
