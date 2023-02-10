import axios from 'axios';

const getAPIClient = () => {
  const api = axios.create({
    baseURL: 'https://dev.api.allthentic.imobpower.com/v1',
  });

  return api;
};

export default getAPIClient;
