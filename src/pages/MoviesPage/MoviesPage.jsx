import { useEffect } from 'react';
import { Field, Formik, Form } from 'formik';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  useEffect(() => {
    document.title = 'Movies';
  }, []);

  return (
    <div className={s.container}>
      <Formik>
        <Form className={s.form}>
          <Field placeholder='Search movie by name'></Field>
          <button>Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MoviesPage;
