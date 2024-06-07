import axios from 'axios';
import { getBaseApiUrl } from '../../utils/getEnvVariables';
import { API_PATHS } from '../../constants';

export const getAllBreeds = async () => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: getBaseApiUrl() + API_PATHS.breeds,
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
