import s from './MovieDetailsPage.module.css';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieInfo } from '../../services/api';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

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
      <button className={s.btn}>Go back</button>
      <div className={s.container}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        <div className={s.info_wrapper}>
          <h2>
            {movie.title}
            <span> ({movie.release_date})</span>
          </h2>
          <p>User score: {`${(movie.vote_average * 10).toString()}%`}</p>
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
            <MovieCast />
          </li>
          <li>
            <MovieReviews />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
