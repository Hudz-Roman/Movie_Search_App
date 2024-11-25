import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import s from './App.module.css';
import { FallingLines } from 'react-loader-spinner';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

function App() {
  return (
    <Suspense
      fallback={
        <div className={s.susp}>
          <h2>Movie Search Application</h2>
          <FallingLines
            color='#4fa94d'
            width='100'
            visible={true}
            ariaLabel='falling-circles-loading'
          />
        </div>
      }
    >
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
