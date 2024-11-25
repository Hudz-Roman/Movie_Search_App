import s from './MovieDetailsPage.module.css';
import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  Outlet,
} from 'react-router-dom';
import { fetchMovieInfo } from '../../services/api';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        const movieInfo = await fetchMovieInfo(movieId);
        setMovie(movieInfo);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieInfo();
  }, [movieId]);

  return (
    <div>
      <button className={s.btn} onClick={goBack}>
        Go back
      </button>
      <div className={s.container}>
        {!movie.poster_path ? (
          <span>No poster</span>
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        )}
        <div className={s.info_wrapper}>
          <h2>
            {`${movie.title} `}
            <span>{movie.release_date && movie.release_date.slice(0, 4)}</span>
          </h2>
          <p>
            {`User score: ${Math.round(movie.vote_average * 10).toString()}%`}
          </p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie.genres
              ? movie.genres.map((genre) => genre.name).join(', ')
              : 'No genres available'}
          </p>
        </div>
      </div>
      <div className={s.add_info}>
        <p>Additional information:</p>
        <ul>
          <li>
            <Link to='cast'>Cast</Link>
          </li>
          <li>
            <Link to='reviews'>Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<h2 className={s.susp}>Just a moment...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
