import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FavoritePage from '../Pages/FavoritePage';
import Home from '../Pages/Home';

const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorite" element={<FavoritePage />} />
    </Routes>
  );
};

export default PageRoute;
