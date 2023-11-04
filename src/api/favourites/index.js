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
    const response = await axios.get(config.url, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getAllFavourites;
