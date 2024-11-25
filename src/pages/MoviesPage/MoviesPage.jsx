import { useEffect, useState } from 'react';
import { Field, Formik, Form } from 'formik';
import s from './MoviesPage.module.css';
import { fetchSearch } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import { useNavigate, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const navigate = useNavigate();

  const initialValues = {
    query: '',
  };

  useEffect(() => {
    document.title = 'Movies';
    const getSearchRes = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchSearch(query);
        const moviesData = response.map(({ id, title }) => ({ id, title }));
        setMovies((prev) => [...prev, ...moviesData]);
      } catch (error) {
        console.error(error);
        setIsError(true);
        alert('Error');
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      getSearchRes();
    }
  }, [query]);

  const onSubmit = (query) => {
    if (!query) {
      alert('Search query should not be empty');
      return;
    }
    setMovies([]);
    setSearchParams({ query: query });
    navigate(`?query=${query.toLowerCase()}`);
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values.query)}
      >
        <Form className={s.form}>
          <Field
            placeholder='Search movie by name'
            name='query'
            type='text'
          ></Field>
          <button type='submit'>Search</button>
        </Form>
      </Formik>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error...</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
