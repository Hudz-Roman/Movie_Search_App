import { useEffect } from 'react';
import s from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = ({ movies }) => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div className={s.container}>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
