import s from './MovieDetailsPage.module.css';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';

const MovieDetailsPage = () => {
  return (
    <div className={s.container}>
      <img src='' alt='' />
      <h2></h2>
      <span>User score:</span>
      <p>Overview</p>
      <span></span>
      <p>Genres</p>
      <span></span>
      <p>Additional information:</p>
      <MovieCast />
      <MovieReviews />
    </div>
  );
};

export default MovieDetailsPage;
