import { Link } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={s.movie_list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
