import './App.css';

import MainPage from './pages/main-page/main-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
