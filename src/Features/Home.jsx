import React from 'react';
import './Home.css';
import Main from './HomeGetDogs/main/Main';

const Home = () => {
  React.useEffect(() => {
    document.title = 'Dogs | Home';
  });
  return (
    <>
      <Main />
    </>
  );
};

export default Home;
