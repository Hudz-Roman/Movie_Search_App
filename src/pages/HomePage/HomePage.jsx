import { useEffect } from 'react';
import s from './HomePage.module.css';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div className={s.container}>
      <h2>Trending today</h2>
    </div>
  );
};

export default HomePage;
