import React from 'react';
import { Routes, Route } from 'react-router-dom';

// PAGES
import Home from './pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
