import React from 'react';
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Layouts imports below
import Layout from './components/Layout';
import FitnessLayout from './components/FitnessLayout';
// Pages imports below
import Home from './pages/Home';
import Plans from './pages/Plans';
import Nutrition from './pages/Nutrition';

import ScrollToTop from './components/ScrollToTop';

//Fitness Pages imports
import Overview from './pages/Fitness/Overview';
import Anatomy from './pages/Fitness/Anatomy';
import Calculator from './pages/Fitness/Calculator';
import Progression from './pages/Fitness/Progression';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <React.StrictMode>
        
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="plans" element={<Plans />} />
            <Route path="nutrition" element={<Nutrition />} />
            <Route path="fitness" element={<FitnessLayout />} >
              <Route index element={<Overview />}/>
              <Route path="anatomy" element={<Anatomy />}/>
              <Route path="calculator" element={<Calculator />}/>
              <Route path="progression" element={<Progression />}/>
            </Route>
          </Route>

        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
