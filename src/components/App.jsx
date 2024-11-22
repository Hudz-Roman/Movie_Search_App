import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

import { fetchTrendingMovies } from '../services/api';
// import { fetchMovieInfo } from '../services/api';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';

function App() {
  const [movies, setMovies] = useState([]);
  // const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  // useEffect(() => {
  //   const getMovieInfo = async () => {
  //     try {
  //       const movie = await fetchMovieInfo();
  //       setMovie(movie);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   getMovieInfo();
  // }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage movies={movies} />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
