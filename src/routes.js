import React from 'react';
import { Routes, Route } from 'react-router-dom';

// PAGES
import Home from './pages/Home';
import Search from './pages/Search';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id/repositories' element={<Search />} />
    </Routes>
  );
};

export default AppRoutes;
