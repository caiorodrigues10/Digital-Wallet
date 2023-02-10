import { api } from '../Api/api';

const getError = async (): Promise<any> => {
  const response = await api.get('/origination/errorsHistory', {
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijp7fSwiaXNzIjoiMjY1MTg5NEJCNENENEE5Njg1MzNGODIyMjk1NTg4RjAiLCJpYXQiOjE2NzYwMzkyMDUsImV4cCI6MTY3NjA0MDAwNX0.LjmRPsvTXRX-YLpA02lrcpXURFmSagxu4BBdP5Sl6Mc`,
    },
  });

  return response.data;
};

export { getError };
