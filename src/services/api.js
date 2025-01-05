import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_BEARER_KEY}`,
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const resp = await axios.get('/trending/movie/day', options);
    return resp.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieInfo = async (id) => {
  try {
    const resp = await axios.get(`/movie/${id}`, options);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearch = async (query) => {
  try {
    const resp = await axios.get(`/search/movie?query=${query}`, options);
    return resp.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCastByMovieId = async (id) => {
  try {
    const resp = await axios.get(`movie/${id}/credits`, options);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchReviewByMovieId = async (id) => {
  try {
    const resp = await axios.get(`movie/${id}/reviews`, options);
    return resp.data.results;
  } catch (error) {
    console.error(error);
  }
};
