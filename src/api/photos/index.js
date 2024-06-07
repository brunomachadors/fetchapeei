import axios from 'axios';
import { API_PATHS } from '../../constants';

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const getAllPhotos = async () => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${baseApiUrl}${API_PATHS.images}`,
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

export const getPhotoGallery = async (page) => {
  const config = {
    method: 'get',
    url: `${baseApiUrl}${API_PATHS.images}/search?order=ASC&page=${page}&limit=12`,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
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
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${baseApiUrl}${API_PATHS.images}/${imageId}`,
    headers: {
      'x-api-key': apiKey,
    },
  };

  try {
    const response = await axios.get(config.url, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
