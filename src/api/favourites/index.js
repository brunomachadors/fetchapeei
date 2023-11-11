import axios from 'axios';
import { getApiKey, getBaseApiUrl } from '../../utils/getEnvVariables';
import { API_PATHS } from '../../constants';

const getAllFavourites = async () => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: getBaseApiUrl() + API_PATHS.favourites,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': getApiKey(),
    },
  };

  try {
    const response = await axios(config.url, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postFavourite = async (imageId, subId = 'brunomachado') => {
  let data = JSON.stringify({
    image_id: imageId,
    sub_id: subId,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: getBaseApiUrl() + API_PATHS.favourites,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': getApiKey(),
    },
    data: data,
  };

  try {
    const response = await axios(config.url, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteFavourite = async (imageId) => {
  let config = {
    method: 'delete',
    url: getBaseApiUrl() + API_PATHS.favourites + `/${String(imageId)}`,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': getApiKey(),
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
