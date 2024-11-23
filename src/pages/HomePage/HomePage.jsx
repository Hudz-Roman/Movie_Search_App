import { useEffect, useState } from 'react';
import s from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const moviesList = await fetchTrendingMovies();
        setMovies(moviesList);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div className={s.container}>
      <h2>Trending today</h2>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error...</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
