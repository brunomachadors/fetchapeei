import axios from 'axios';
import { API_PATHS } from '../../constants';

const baseApiUrl = 'https://api.thedogapi.com/v1';
const apiKey =
  'live_JI0J3d6qcQtSWgRvAA5d0PAy4UWzJeq5uesgqIxQTAPGJrC1lsGbqm3R5eVOWQlB';

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
