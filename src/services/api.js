import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Zjc2MWM1M2U1YzlmYWE5NjA0YmNiM2RlNDcwZGMwYSIsIm5iZiI6MTczMjAzMjYwNi4xMjI2OTAyLCJzdWIiOiI2NzNjYjZjMzI0ODViODViM2NhOGUxN2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7GCzCNPwdBjmIrBxU6TY7XJtnXP-4RW8goH2BiS02_Q',
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const resp = await axios.get('/trending/movie/day?language=en-US', options);
    return resp.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export const fetchMovieInfo = async (id) => {
//   try {
//     const resp = await axios.get(`/movie/${id}`, options);
//     return resp.data.results;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
