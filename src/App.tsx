import React from 'react';
import { Routes, Route } from 'react-router-dom';

import WeatherDashboard from './pages/WeatherDashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<WeatherDashboard />} />
    </Routes>
  );
}

export default App;
