export const getApiKey = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey);
  return apiKey;
};
