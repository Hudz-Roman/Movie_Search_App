import { useEffect } from 'react';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Not found page...';
  }, []);

  return <h2 className={s.title}>Not found page...</h2>;
};

export default NotFoundPage;
