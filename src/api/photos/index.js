import axios from 'axios';
import { API_PATHS } from '../../constants';

const baseApiUrl = 'https://api.thedogapi.com/v1';
const apiKey =
  'live_JI0J3d6qcQtSWgRvAA5d0PAy4UWzJeq5uesgqIxQTAPGJrC1lsGbqm3R5eVOWQlB';

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
