import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastByMovieId } from '../../services/api';
import s from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCastByMovieId(movieId);
        setCasts(data.cast);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <ul className={s.cast_wrapper}>
      {casts.map((cast) => (
        <li key={cast.id} className={s.cast_item}>
          {!cast.profile_path ? (
            <span>No image</span>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
              alt={`${cast.name} picture`}
            />
          )}
          <div className={s.cast_info}>
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
