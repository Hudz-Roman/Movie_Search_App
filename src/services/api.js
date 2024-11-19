import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// const API_KEY = '5f761c53e5c9faa9604bcb3de470dc0a';

// const options = {
//   headers: {
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Zjc2MWM1M2U1YzlmYWE5NjA0YmNiM2RlNDcwZGMwYSIsIm5iZiI6MTczMjAzMjYwNi4xMjI2OTAyLCJzdWIiOiI2NzNjYjZjMzI0ODViODViM2NhOGUxN2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7GCzCNPwdBjmIrBxU6TY7XJtnXP-4RW8goH2BiS02_Q',
//   },
// };

export const fetchMovies = async () => {
  const { data } = await axios.get('/movie');
  return data.movie;
};
