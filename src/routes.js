import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// PAGES
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id/repositories' element={<Search />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
