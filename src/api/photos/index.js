import axios from 'axios';
import { getApiKey, getBaseApiUrl } from '../../utils/getEnvVariables';
import { API_PATHS } from '../../constants';

export const getAllPhotos = async () => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: getBaseApiUrl() + API_PATHS.images,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(config.url, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPhotoGallery = async (page = 0) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: getBaseApiUrl() + API_PATHS.images + `/search?page=${page}&limit=12`,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': getApiKey(),
    },
  };

  try {
    const response = await axios.get(config.url, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPhotoById = async (imageId) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: getBaseApiUrl() + API_PATHS.images + `/${imageId}`,
    headers: {
      'x-api-key': getApiKey(),
    },
  };

  try {
    const response = await axios.get(config.url, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
