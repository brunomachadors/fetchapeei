export const getApiKey = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  return apiKey;
};

export const getBaseApiUrl = () => {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  return baseApiUrl;
};
