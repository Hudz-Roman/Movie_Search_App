// import MoviesPage from '../../pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import s from './MovieList.module.css';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <ul className={s.movie_list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {movie.title}
            {/* <Routes>
              <Route
                path={`movies/${movie.id}`}
                element={<MovieDetailsPage />}
              />
            </Routes> */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
