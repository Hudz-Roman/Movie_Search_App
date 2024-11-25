import { useParams } from 'react-router-dom';
import { fetchReviewByMovieId } from '../../services/api';
import { useEffect, useState } from 'react';
import s from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchReviewByMovieId(movieId);
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <ul className={s.reviews_wrapper}>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We have no reviews</p>
      )}
    </ul>
  );
};

export default MovieReviews;
