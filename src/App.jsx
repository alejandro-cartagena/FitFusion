import React from 'react';
import { useState } from 'react';
import './App.css';
import NavBar from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
// Pages imports below
import Home from './pages/Home';
import Fitness from './pages/Fitness';
import Plans from './pages/Plans';
import Nutrition from './pages/Nutrition';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="fitness" element={<Fitness />} />
            <Route path="plans" element={<Plans />} />
            <Route path="nutrition" element={<Nutrition />} />
          </Route>
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
