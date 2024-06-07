import axios from 'axios';
import { API_PATHS } from '../../constants';

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const getAllFavourites = async () => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${baseApiUrl}${API_PATHS.favourites}`,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postFavourite = async (imageId, subId = 'brunomachado') => {
  const data = JSON.stringify({
    image_id: imageId,
    sub_id: subId,
  });

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${baseApiUrl}${API_PATHS.favourites}`,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    data: data,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteFavourite = async (imageId) => {
  const config = {
    method: 'delete',
    url: `${baseApiUrl}${API_PATHS.favourites}/${String(imageId)}`,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
  };

  try {
    const response = await axios.delete(config.url, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getAllFavourites;
